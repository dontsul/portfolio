import { CustomSpinner } from '@/components/customSpinner/CustomSpinner';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-8">
      <CustomSpinner />
    </div>
  );
}
