import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import type { NextPage } from 'next';

import Button from '@/components/buttons/Button';

import { useCountBears } from '@/store/count';

const Home: NextPage = () => {
  const bears = useCountBears((state) => state.bears);
  const increment = useCountBears((state) => state.increasePopulation);
  const decrement = useCountBears((state) => state.decreasePopulation);

  return (
    <div className='h-screen w-full'>
      <div className='flex h-full flex-col items-center justify-center'>
        <h4 className='mt-10 text-center font-bold'>Next JS + Tailwindcss</h4>
        <h1 className='text-3xl'>Bears Populations</h1>
        <h1 className='mt-4 text-2xl'>{bears}</h1>
        <div className='mt-5 flex items-center gap-5'>
          <Button variant='primary' className='px-2' onClick={decrement}>
            <MinusIcon className='h-5 w-5' />
          </Button>
          <Button variant='primary' className='px-2' onClick={increment}>
            <PlusIcon className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
