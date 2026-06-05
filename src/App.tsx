import { LeetifyApi } from "@/api/leetify";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const api = new LeetifyApi();

export const App = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await api.v3.profileMatchesList({
        steam64_id: "",
      });

      return res.data;
    },
  });

  console.log({ isLoading, data });

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  );
};
