import { useEffect, useState, useRef } from "react";

import { ChartData, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";

import style from "components/Pages/stats/stats.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import ComingSoon from "components/ComingSoon";

import { getPrimaryGradient } from "utils/canvasGradient/primary";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const tags = [
  "Spring Boot",
  "creacion",
  "JavaScript",
  "codigo",
  "Videojuego",
  "Java",
  "vercel",
  "Python",
  "Mongoose",
  "php",
  "aprender",
  "ventajas",
  "juego",
  "crear",
  "código",
  "emprender",
  "FastAPI",
  "diseño web",
  "mysql",
  "Platzi",
  "diseño",
  "Nextjs",
  "MongoDB",
  "Programa",
  "React",
];

const posts = [
  1, 1, 2, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
];

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Número de Posts por tag",
    },
  },
  scales: {
    yAxes: {
      grid: {
        display: false,
      },
    },
    xAxes: {
      grid: {
        display: false,
      },
    },
  },
};

export default function Stats() {
  const postByTagCharRef = useRef<ChartJS<"bar">>(null);

  const [postsByTagsData, setPostsByTagsData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = postByTagCharRef.current;
    if (!chart) return;
    const data: ChartData<"bar"> = {
      labels: tags,
      datasets: [
        {
          label: "Posts",
          data: posts,
          backgroundColor: getPrimaryGradient(chart.ctx),
        },
      ],
    };

    setPostsByTagsData(data);
  }, []);

  return (
    <section className={style.stats_container}>
      <aside className={style.chart_container_main}>
        <Bar ref={postByTagCharRef} data={postsByTagsData} options={options} />
      </aside>
      <aside className={style.chart_container}></aside>
      <aside className={style.chart_container}></aside>
    </section>
  );
}

Stats.requireAuth = true;
