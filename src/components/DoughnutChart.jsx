import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({allTodo}) => {
  let todo=allTodo.filter((e) => e.status === "todo").length;
  let inprogress=allTodo.filter((e) => e.status === "inprogress").length;
  let complete=allTodo.filter((e) => e.status === "done").length;

  const data = {
    labels: ["Todo", "Inprogress", "Done"],
    datasets: [
      {
        label: "Total" ,
        data: [todo, inprogress,complete],
        backgroundColor: [
          "#F56565",
          "#ECC94B",
          "#2F855A",
        ],
        borderColor: '',
        borderJoinStyle: "",
        borderWidth: 1,
        hoverOffset: 25,
        offset: 5,
      },
    ],
  };
  return (
    <Doughnut
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
              labels: {
                  // This more specific font property overrides the global property
                  font: {
                      size: 16,
                     
                  }, color:"#fff"
              }
          }
      }
      }}
     
      data={data}
    ></Doughnut>
  );
};
