import { handleSubmission } from '@/app/actions';
import SubmitButton from '@/components/general/SubmitButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const CreateBlogRoute = () => {
  return (
    <div>
      <Card className='max-w-lg mx-auto'>
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create new post to share</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmission} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <Label>Title</Label>
              <Input name='title' required placeholder='Title' />
            </div>
            <div className='flex flex-col gap-2'>
              <Label>Content</Label>
              <Textarea name='content' required placeholder='Content' />
            </div>
            <div className='flex flex-col gap-2'>
              <Label>Image URL</Label>
              <Input name='imageUrl' required placeholder='Image url' />
            </div>
            <SubmitButton />
            {/* <Button>Create Post</Button> */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlogRoute;
