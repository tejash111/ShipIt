
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  KanbanBoard,
  KanbanCard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from '@/components/ui/shadcn-io/kanban';
import { useContext, useEffect, useRef, useState } from 'react';
import { addMonths, endOfMonth, startOfMonth, subDays, subMonths } from 'date-fns';
import { globalContext } from '../../context';
import AddModal from '../../components/AddModal';
import { MdDelete } from 'react-icons/md';
import { Button } from '../../components/ui/button';
import { updateTaskApi } from '../../services';
import { toast } from 'sonner';
import { IoIosFlag } from 'react-icons/io';
import { BsCalendar2DateFill } from 'react-icons/bs';

// Inline content
const today = new Date();



const exampleStatuses = [
  { id: '1', name: 'Planned', color: '#6B7280' },
  { id: '2', name: 'In-Progress', color: '#F59E0B' },
  { id: '3', name: 'Done', color: '#10B981' },
];

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
});

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric'
});

const Kanban = () => {
  const { taskData, setTaskData, fetchTasks, fetchedData, setFetchedData, handleDelete } = useContext(globalContext)
  console.log(fetchedData);

  const [features, setFeatures] = useState(fetchedData);
  console.log(features);



  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const newStatus = over.id;

    const updatedFeatures = features.map((feature) => {
      if (feature._id === active.id) {
        const updatedFeature = { ...feature, status: newStatus };


        updateTaskApi(updatedFeature)
          .then(() => toast.success("Task Updated"))
          .catch((err) => {
            toast.error("Update failed")
            console.log(err)
          }
          );

        return updatedFeature;
      }
      return feature;
    });

    setFeatures(updatedFeatures);
  };


  useEffect(() => {
    fetchTasks()
  }, [features])



  return (
    <div className='w-full min-h-screen backdrop-blur-[10px]'>
      <KanbanProvider onDragEnd={handleDragEnd} className="p-3">
        <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto pb-4 items-start">
          {exampleStatuses.map((status) => (
            <KanbanBoard className="min-h-80 sm:h-screen flex-1 min-w-[250px] w-full sm:w-full" key={status.name} id={status.name}>
              <KanbanHeader name={status.name} color={status.color} />
              <KanbanCards>
                {features?.filter((feature) => feature.status === status.name)
                  .map((feature, index) => (
                    <KanbanCard
                      key={feature._id}
                      name={feature.title}
                      parent={status.name}
                      id={feature._id}
                      className="cursor-pointer"
                    >
                      <div className="flex items-start">
                        <div className="gap-1 w-full">
                          <div className='flex justify-between items-center gap-4'>
                            <div className='flex-1 text-xs sm:text-sm font-light break-words'>{feature?.title}</div>
                            <div className='font-light'>
                              {feature.priority === "High" ? (
                                <div className='flex gap-1'><IoIosFlag className='text-red-600 flex mt-1.5' /> {feature.priority}</div>
                              ) : feature.priority === "Medium" ? (
                                <div className='flex gap-1'><IoIosFlag className='text-yellow-500 flex mt-1.5' /> {feature.priority}</div>
                              ) : (<div className='flex gap-1'><IoIosFlag className='text-blue-600 flex mt-1.5 ' /> {feature.priority}</div>)}
                            </div>
                            <div className='flex gap-2'>
                              <div className=''><BsCalendar2DateFill className='text-gray-700' /></div>
                              {feature?.date}
                            </div>
                          </div>
                          <p className="m-0 text-muted-foreground text-xs break-words">
                            {feature?.description}
                          </p>
                        </div>
                      </div>
                    </KanbanCard>
                  ))}
              </KanbanCards>
            </KanbanBoard>
          ))}
        </div>
      </KanbanProvider>

    </div>
  );
};

export default Kanban;