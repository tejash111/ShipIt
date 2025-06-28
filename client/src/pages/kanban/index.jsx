
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
  const {taskData,setTaskData,fetchTasks,fetchedData,setFetchedData}=useContext(globalContext)
  console.log(fetchedData);
  
  const [features, setFeatures] = useState(fetchedData);
  console.log(features);
  

  const handleDragEnd = ( event) => {
    const { active, over } = event;

    if (!over) {
      return;
    }


    const newStatus = over.id;



    

    setFeatures(
      features.map((feature) => {
        if (feature._id === active.id) {
          return { ...feature, status : newStatus };
        }

        return feature;
      })
    );
  };

 useEffect(()=>{
  fetchTasks()
 },[])

  

  return (
    <div className='w-full min-h-screen'>
    <KanbanProvider onDragEnd={handleDragEnd} className="p-3">

      {exampleStatuses.map((status) => (
        <KanbanBoard className="h-160" key={status.name} id={status.name}>
          <KanbanHeader name={status.name} color={status.color} />
          <KanbanCards>
            {features?.filter((feature)=>feature.status === status.name)
            .map((feature, index) => (
                <KanbanCard
                  key={feature._id}
                  name={feature.title}
                  parent={status.name} 
                  id={feature._id}
                  className="cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <p className="m-0 flex-1 font-medium text-sm">
                        {feature.title}
                      </p>
                      <p className="m-0 text-muted-foreground text-xs">
                        {feature.description}
                      </p>
                    </div>
                    
                  </div>
                  <p className="m-0 text-muted-foreground text-xs">
                    {feature.data}
                  </p>
                </KanbanCard>
              ))}
              
          </KanbanCards>
          
        </KanbanBoard>
      ))}
      
    </KanbanProvider>
    <AddModal />
    </div>
  );
};

export default Kanban;