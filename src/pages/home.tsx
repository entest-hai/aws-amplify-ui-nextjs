import { Heading, Button } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import * as React from "react";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <Heading level={2}>Home Page</Heading>
      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        Goto Index
      </Button>
    </div>
  );
};

export default Home;
