import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";

const events = [
  {
    date: "2017",
    title: "初めてプログラミングに触れる",
    description: [
      "ExcelのVBAを用いて実験データ整理の自動化を行う",
      "プログラミングを用いた自動化に興味を持つ",
    ],
  },
  {
    date: "2021.11 ~ 2022.02",
    title: "AI Quest",
    description: [
      "組み立て系中小企業様の生産計画最適化",
      "最終的に実装したのはシンプルなアルゴリズムであったが",
      "実際の企業に向けたAI実装の楽しさや大変さを知る",
    ],
  },
  {
    date: "2021.10 ~ 2022.01",
    title: "GCI 2021 Winter",
    description: [
      "データ分析のために必要なPythonやライブラリの使い方や",
      "データ分析を元にした企業への事業提案の方法を学ぶ",
      "最終課題の事業提案が評価され優秀生に選出される",
    ],
  },
  {
    date: "2022.02.19 ~ 2022.02.20",
    title: "コニカミノルタ",
    description: [
      "Pythonと姿勢検知が出来るコニカミノルタ独自デバイスForxaiを用いたサービス開発",
    ],
  },
  {
    date: "2022.04 ~ ",
    title: "GCI TA",
    description: [
      "オフィスアワーを開催し, 受講者の質問に応える",
      "最終課題の採点",
    ],
  },
  {
    date: "2022.04 ~ ",
    title: "松尾研究所 共同研究",
    description: ["連続系プラントの生産計画最適化"],
  },
];

export default function CustomizedTimeline() {
  return (
    <>
      <Header />
      <Timeline position="alternate">
        {events.map((event) => (
          <TimelineItem key={event.date}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <Typography variant="h6">{event.date}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                {event.title}
              </Typography>
              {event.description.map((des, index) => (
                <Typography key={index}>{des}</Typography>
              ))}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}
