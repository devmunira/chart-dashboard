import React from 'react';
import { AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';
import { BiSolidDashboard } from 'react-icons/bi';
import {PiChartLineUpLight, PiPresentationChart} from "react-icons/pi"

export const charts = ['Bar Chart' , 'Area Range Chart' , 'Box Whisker Plot' , 'Scater Chart']

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Dashboard',
        icon: <BiSolidDashboard />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'Bar Chart',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'Box Whisker Plot',
        icon: <PiPresentationChart />,
      },
      {
        name: 'Area Range Chart',
        icon: <AiOutlineAreaChart />,
      },
      {
        name: 'Scater Chart',
        icon: <PiChartLineUpLight />,
      }
    ],
  },
];
