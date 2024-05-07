import {Button} from '@/ui-kit/Button';
import {RiArrowRightWideLine} from 'react-icons/ri';

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row gap-6">
        <Button variant={'primary'} size={'sm'}>
          test
        </Button>
        <Button variant={'primary'} size={'md'}>
          test
        </Button>
        <Button variant={'primary'} size={'lg'}>
          test
        </Button>
        <Button variant={'primary'} size={'rounded'}>
          <RiArrowRightWideLine size={20} />
        </Button>
      </div>
      <div className="flex flex-row gap-6">
        <Button variant={'secondary'} size={'sm'}>
          test
        </Button>
        <Button variant={'secondary'} size={'md'}>
          test
        </Button>
        <Button variant={'secondary'} size={'lg'}>
          test
        </Button>
        <Button variant={'secondary'} size={'rounded'}>
          <RiArrowRightWideLine size={20} />
        </Button>
      </div>
      <div className="flex flex-row gap-6">
        <Button variant={'outline'} size={'sm'}>
          test
        </Button>
        <Button variant={'outline'} size={'md'}>
          test
        </Button>
        <Button variant={'outline'} size={'lg'}>
          test
        </Button>
        <Button variant={'outline'} size={'rounded'}>
          <RiArrowRightWideLine size={20} />
        </Button>
      </div>
      <div className="flex flex-row gap-6">
        <Button variant={'link'} size={'sm'}>
          test
        </Button>
        <Button variant={'link'} size={'md'}>
          test
        </Button>
        <Button variant={'link'} size={'lg'}>
          test
        </Button>
        <Button variant={'link'} size={'rounded'}>
          <RiArrowRightWideLine size={20} />
        </Button>
      </div>
      <div className="flex flex-row gap-6">
        <Button variant={'destructive'} size={'sm'}>
          test
        </Button>
        <Button variant={'destructive'} size={'md'}>
          test
        </Button>
        <Button variant={'destructive'} size={'lg'}>
          test
        </Button>
        <Button variant={'destructive'} size={'rounded'}>
          <RiArrowRightWideLine size={20} />
        </Button>
      </div>
    </div>
  );
}
