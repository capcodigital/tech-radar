import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  RadarContextType,
  RadarContext,
} from "components/RadarContextProvider/RadarContextProvider";
import * as d3 from "d3";
import { data } from "data/data";
import images from "images";
import StyledGroup from "components/RadarStyledComponents/StyledGroup";
import { Wrapper, StyledNav } from "./styles/";
import { RadarTooltip } from "components/RadarStyledComponents/StyledTooltip";
import techContent from "data/content/index";
import { getRowLength } from "helpers/helpers";

const labels = [
  "DevOps",
  "Data Engineering",
  "Quality Engineering",
  "Cloud & Platforms",
  "Integration",
  "Backend",
  "Frontend",
  "Mobile",
];

const size = 900;
const outterRadius = size / 2 - 100;
const middleRadius = (outterRadius * 2) / 3;
const innerCircleRadius = outterRadius / 3;
const radius = [350, (outterRadius * 2) / 3, outterRadius / 3];
const segmentsNum = 8;
const dataPointCircleRadius = 12;
const imageSize = Math.sqrt(2) * dataPointCircleRadius; //square inside circle
const navBtnRadius = size / 2 - 50;
const navImageSize = 50;

const createArc = d3.arc().padAngle(0);

let techIdx = 9;

interface Props {
  scalingClicked: boolean;
  skilledClicked: boolean;
  preferredClicked: boolean;
}

const Radar = ({ scalingClicked, skilledClicked, preferredClicked }: Props) => {
  const history = useHistory();
  const { setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);
  const [hovered, setHovered] = useState("DevOps");

  const technologyHasNoContent = (technologyName: string) =>
    techContent.find(
      (item) =>
        item.technology === technologyName &&
        (item.content === undefined || item.content.length === 0)
    );

  const handleClick = (categoryName: string) => {
    setCategory(categoryName);
    history.push(`/category/${categoryName.replace(/\s/g, "-")}`.toLowerCase());
  };

  const handleClickIcon = (categoryName: string, technologyName: string) => {
    setCategory(categoryName);
    setTechnology(technologyName);

    if (technologyHasNoContent(technologyName)) return;

    history.push(
      `/technology/${categoryName}/${technologyName}`
        .replace(/\s/g, "-")
        .toLowerCase()
    );
  };

  return (
    <Wrapper>
      <svg viewBox={"0 0 900 900"} style={{ overflow: "visible" }}>
        <g
          transform={`translate(${size / 2} ${size / 2})`}
          onMouseLeave={() => setHovered("")}
        >
          {/* 3 main rings */}
          {scalingClicked ? (
            <circle
              cx={0}
              cy={0}
              r={innerCircleRadius}
              fill={"#e6236d"}
              opacity={1}
            />
          ) : (
            <circle
              cx={0}
              cy={0}
              r={innerCircleRadius}
              fill={"#ffffff"}
              opacity={0.05}
            />
          )}
          {skilledClicked ? (
            <>
              <circle
                cx={0}
                cy={0}
                r={middleRadius}
                fill={"#e6236d"}
                opacity={1}
              />
              <circle
                cx={0}
                cy={0}
                r={innerCircleRadius}
                fill={"#850334"}
                opacity={0.9}
              />
            </>
          ) : (
            <circle
              cx={0}
              cy={0}
              r={middleRadius}
              fill={"#ffffff"}
              opacity={0.03}
            />
          )}
          {preferredClicked ? (
            <>
              <circle
                cx={0}
                cy={0}
                r={outterRadius}
                fill={"#e6236d"}
                opacity={0.9}
              />
              <circle
                cx={0}
                cy={0}
                r={middleRadius}
                fill={"#850334"}
                opacity={0.9}
              />
            </>
          ) : (
            <circle
              cx={0}
              cy={0}
              r={outterRadius}
              fill={"#ffffff"}
              stroke={"lightgrey"}
              opacity={0.03}
            />
          )}
          {new Array(8).fill(0).map((_d, idx: number) => (
            <line
              key={`tech-line-${idx}`}
              transform={`rotate(${(360 / 8) * idx + 22.5})`}
              x1={0}
              y1={0}
              y2={outterRadius}
              stroke={"white"}
              strokeWidth={0.2}
            />
          ))}
          {/* nav buttons around the radar */}
          {Object.entries(images).map(([name, image], idx) => {
            return (
              <StyledNav
                key={`${name}-nav`}
                onClick={() => handleClick(name)}
                transform={`translate(${
                  navBtnRadius *
                    Math.cos(
                      ((2 * Math.PI) / segmentsNum) * idx - (4 * Math.PI) / 8
                    ) -
                  (idx === 4 ? 90 : idx === 0 ? 70 : idx > 3 ? 120 : 20)
                }, ${
                  navBtnRadius *
                    Math.sin(
                      ((2 * Math.PI) / segmentsNum) * idx - (4 * Math.PI) / 8
                    ) -
                  (idx === 4 ? 40 : idx === 0 ? 10 : 0)
                })`}
              >
                <image
                  key={`tech-line-${idx}`}
                  x={0}
                  y={0}
                  href={image}
                  height={navImageSize}
                  width={navImageSize}
                />
                <text
                  className={name}
                  textAnchor="start"
                  x={60}
                  y={30}
                  fontSize={20}
                  fontWeight={700}
                  fill={"white"}
                >
                  {labels[idx]}
                </text>
                <path
                  scale={0.5}
                  transform={`translate(${
                    name.length > 11
                      ? name.length * 10 + 10
                      : name.length * 10 + 50
                  },17) scale(0.6)`}
                  d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"
                  fill={"white"}
                />
              </StyledNav>
            );
          })}
          {/* labels for rings */}
          {[-1, 1].map((side: number) =>
            ["scaling", "skilled", "preferred"].map(
              (segmentName: string, idx: number) => (
                <g key={`${segmentName}-line`} transform={``}>
                  {(scalingClicked && segmentName === "scaling") ||
                  (skilledClicked && segmentName === "skilled") ||
                  (preferredClicked && segmentName === "preferred") ? (
                    <>
                      <text
                        textAnchor="middle"
                        y={
                          side *
                          (innerCircleRadius * (idx + 1) -
                            innerCircleRadius / 2)
                        }
                        fontSize={16}
                        fontWeight="bold"
                        fill={"white"}
                        opacity={1}
                      >
                        {segmentName}
                      </text>
                    </>
                  ) : (
                    <>
                      <text
                        textAnchor="middle"
                        y={
                          side *
                          (innerCircleRadius * (idx + 1) -
                            innerCircleRadius / 2)
                        }
                        fontSize={12}
                        fill={"white"}
                        opacity={0.5}
                      >
                        {segmentName}
                      </text>
                    </>
                  )}
                </g>
              )
            )
          )}
          {[-1, 1].map((side: number) =>
            ["scaling", "skilled", "preferred"].map(
              (segmentName: string, idx: number) => (
                <g key={`${idx}-line`}>
                  {(scalingClicked && segmentName === "scaling") ||
                  (skilledClicked && segmentName === "skilled") ||
                  (preferredClicked && segmentName === "preferred") ? (
                    <>
                      <text
                        textAnchor="middle"
                        y={0}
                        x={
                          side *
                          (innerCircleRadius * (idx + 1) -
                            innerCircleRadius / 2)
                        }
                        fontSize={16}
                        fontWeight="bold"
                        fill={"white"}
                        opacity={1}
                      >
                        {segmentName}
                      </text>
                    </>
                  ) : (
                    <>
                      <text
                        textAnchor="middle"
                        y={0}
                        x={
                          side *
                          (innerCircleRadius * (idx + 1) -
                            innerCircleRadius / 2)
                        }
                        fontSize={12}
                        fill={"white"}
                        opacity={0.5}
                      >
                        {segmentName}
                      </text>
                    </>
                  )}
                </g>
              )
            )
          )}

          {labels.map((tech: string, idx: number) => (
            <path
              key={`${tech}-arc`}
              className={`arc ${tech}-segment`}
              data-test-id={`${tech}-arc`}
              d={
                createArc({
                  startAngle: -Math.PI / 8 + (Math.PI / 8) * 2 * idx,
                  endAngle: Math.PI / 8 + (Math.PI / 8) * 2 * idx,
                  innerRadius: 0,
                  outerRadius: outterRadius,
                })!
              }
              fill={tech === hovered ? "rgb(235, 35, 109, 0.3)" : "transparent"}
              onMouseOver={() => setHovered(tech)}
              onClick={() => handleClick(tech)}
            />
          ))}

          {data.map((segment: any) => {
            techIdx += 2;
            return ["preferred", "skilled", "scaling"].map(
              (category: string, catIdx: number) =>
                segment.data[category].map(
                  (
                    dataPoint: { name: string; link: string; enabled: boolean },
                    idx: number
                  ) => {
                    // split data into 2 rows if more than 3 data point
                    const r =
                      idx > 2 ? radius[catIdx] - 90 : radius[catIdx] - 30;
                    const dataLengthPerRow = getRowLength(
                      segment.data[category].length,
                      idx
                    );

                    return (
                      <StyledGroup
                        key={`preferred-${idx}`}
                        opacity={
                          hovered === segment.name ||
                          scalingClicked ||
                          skilledClicked ||
                          preferredClicked
                            ? 1
                            : 0.3
                        }
                        onClick={() =>
                          handleClickIcon(segment.name, dataPoint.name)
                        }
                      >
                        <RadarTooltip
                          title={dataPoint.name}
                          aria-label={dataPoint.name}
                          placement="top"
                          arrow
                        >
                          <g
                            className={`techIcon-${dataPoint.name} ${
                              technologyHasNoContent(dataPoint.name) &&
                              "no-content"
                            }`}
                          >
                            {/* background circle for icons */}
                            <circle
                              key={`preferred-${dataPoint.name}-${idx}`}
                              // r = distance from center
                              // Math.PI/segmentsNum = move points inside a segment otherwise only half of the points would be inside
                              // (2 * Math.PI) / (segmentsNum * dataLengthPerRow)) * (idx > 2 ? idx - 3 : idx) = calculating coordinates
                              // (idx > 2 ? idx - 3 : idx) = start angle at original point after 3rd data point
                              // Math.PI / (segmentsNum * dataLengthPerRow) = evenly distribute inside segment
                              cx={`${
                                r *
                                Math.cos(
                                  (techIdx * Math.PI) / segmentsNum +
                                    ((2 * Math.PI) /
                                      (segmentsNum * dataLengthPerRow)) *
                                      (idx > 2 ? idx - 3 : idx) +
                                    Math.PI / (segmentsNum * dataLengthPerRow)
                                )
                              }`}
                              cy={`${
                                r *
                                Math.sin(
                                  (techIdx * Math.PI) / segmentsNum +
                                    ((2 * Math.PI) /
                                      (segmentsNum * dataLengthPerRow)) *
                                      (idx > 2 ? idx - 3 : idx) +
                                    Math.PI / (segmentsNum * dataLengthPerRow)
                                )
                              }`}
                              r={dataPointCircleRadius}
                              fill={"white"}
                            />

                            <image
                              x={`${
                                r *
                                  Math.cos(
                                    (techIdx * Math.PI) / segmentsNum +
                                      ((2 * Math.PI) /
                                        (segmentsNum * dataLengthPerRow)) *
                                        (idx > 2 ? idx - 3 : idx) +
                                      Math.PI / (segmentsNum * dataLengthPerRow)
                                  ) -
                                imageSize / 2
                              }`}
                              y={`${
                                r *
                                  Math.sin(
                                    (techIdx * Math.PI) / segmentsNum +
                                      ((2 * Math.PI) /
                                        (segmentsNum * dataLengthPerRow)) *
                                        (idx > 2 ? idx - 3 : idx) +
                                      Math.PI / (segmentsNum * dataLengthPerRow)
                                  ) -
                                imageSize / 2
                              }`}
                              href={dataPoint.link}
                              height={imageSize}
                              width={imageSize}
                            />
                          </g>
                        </RadarTooltip>
                      </StyledGroup>
                    );
                  }
                )
            );
          })}
        </g>
      </svg>
    </Wrapper>
  );
};

export default Radar;
