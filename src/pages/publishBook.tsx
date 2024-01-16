import React from "react";

const PublishBook = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center relative h-screen w-screen bg-[url('/cover.jpg')] bg-center bg-cover overflow-hidden">
        <form>publish book</form>
      </main>
    </>
  );
};

export default React.memo(PublishBook);
