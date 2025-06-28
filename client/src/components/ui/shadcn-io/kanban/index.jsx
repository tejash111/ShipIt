'use client';;
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  DndContext,
  rectIntersection,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';

export const KanbanBoard = ({
  id,
  children,
  className
}) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      className={cn(
        'flex h-full min-h-40 flex-col gap-2 rounded-md border bg-secondary p-2 text-xs shadow-sm outline outline-2 transition-all',
        isOver ? 'outline-primary' : 'outline-transparent',
        className
      )}
      ref={setNodeRef}>
      {children}
    </div>
  );
};

export const KanbanCard = ({
  id,
  name,
  index,
  parent,
  children,
  className
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data: { index, parent },
    });

  return (
    <Card
      className={cn('rounded-md p-3 shadow-sm', isDragging && 'cursor-grabbing', className)}
      style={{
        transform: transform
          ? `translateX(${transform.x}px) translateY(${transform.y}px)`
          : 'none',
      }}
      {...listeners}
      {...attributes}
      ref={setNodeRef}>
      {children ?? <p className="m-0 font-medium text-sm">{name}</p>}
    </Card>
  );
};

export const KanbanCards = ({
  children,
  className
}) => (
  <div className={cn('flex flex-1 flex-col gap-2', className)}>{children}</div>
);

export const KanbanHeader = (props) =>
  'children' in props ? (
    props.children
  ) : (
    <div className={cn('flex shrink-0 items-center gap-2', props.className)}>
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: props.color }} />
      <p className="m-0 font-semibold text-sm">{props.name}</p>
    </div>
  );

export const KanbanProvider = ({
  children,
  onDragEnd,
  className
}) => (
  <DndContext collisionDetection={rectIntersection} onDragEnd={onDragEnd}>
    <div className={cn('grid w-full auto-cols-fr grid-flow-col gap-4', className)}>
      {children}
    </div>
  </DndContext>
);
