import React from "react";
import { KpiCard } from "../utils/kpiCard.tsx";

type KpiCardPropsType = {
  title: string;
  percentage: string;
  price: string;
  icon: React.JSX.Element; 
};

const Card = ({ data }: { data: KpiCardPropsType[] }) => {
  return (
    <section className="container mx-auto py-5 px-4 lg:px-2">
      <div className="flex justify-between md:items-center">
        <div className="font-bold">Overall Performance</div>
      </div>
      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
        {data.map((props, key: number) => (
          <KpiCard key={key} {...(props as any)} />
        ))}
      </div>
    </section>
  );
};

export default Card;
