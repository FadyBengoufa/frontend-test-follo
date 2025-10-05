import { Button, Chip, Input } from "@heroui/react";
import GridColors from "./components/GridColors";

function App() {
  return (
    <>
      <main className="flex min-h-screen flex-col p-24">
        {/* 1. ADD INPUTS */}
        <div className="flex flex-col gap-6 w-full">
          <Input
            label="Email"
            type="email"
            className="border-3 border-default-200 rounded-medium"
          />
          <Input
            label="Password"
            type="password"
            className="border-3 border-default-200 rounded-medium"
          />
        </div>

        {/* 2. ADD BUTTON */}
        <div className="mt-8">
          <Button className="bg-purple-secondary rounded-medium text-white p-4">
            Click me!
          </Button>
        </div>
        {/* 3. ADD CHIPS */}
        <div className="mt-8">
          <div className="flex gap-2 font-inter">
            <Chip className="bg-purple-secondary rounded-full text-white px-5 text-nowrap">
              test 1
            </Chip>
            <Chip className="bg-primary rounded-full text-white px-5">
              test 2
            </Chip>
            <Chip className="bg-success-500 rounded-full px-5">test 3</Chip>
          </div>
        </div>
        {/* 4. ADD GRID */}
        <div className="mt-8">
          <GridColors />
        </div>
        {/* 5. ADD LINE */}
        <div>
          <div className="h-[3px] w-[200px] bg-purple-secondary my-8"></div>
        </div>
      </main>
    </>
  );
}

export default App;
