import React from 'react';
import * as d3 from 'd3';

interface BubbleMapProps {
  data: any;
}

interface BubbleMapState {
  data: any;
  hovered: any;
}

const radiusScale = d3.scaleLinear().range([1, 100]).domain([0, 200]);
const width = 300;
const height = 300;

const color = d3
  .scaleLinear<string>()
  .domain([30, 50, 100])
  .range(['#D91448', '#592556', '#38379F']);

class BubbleMap extends React.Component<BubbleMapProps, BubbleMapState> {
  constructor(props: any) {
    super(props);
    this.state = { data: props.data, hovered: null };
  }
  componentDidMount() {
    d3.forceSimulation()
      .nodes(this.props.data as any)
      .velocityDecay(0.5)
      .force('x', d3.forceX().strength(0.05))
      .force('y', d3.forceY().strength(0.05))
      .force(
        'collide',
        d3.forceCollide((d: any) => {
          return radiusScale(d.occurence) + 15;
        })
      )
      .on('tick', () => {
        this.setState({ ...this.props.data });
      });
  }

  handleMouseOver = (item: number) => {
    this.setState({ hovered: item });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: null });
  };

  svgMouseOver = () =>
    d3
      .forceSimulation()
      .nodes(this.props.data)
      .velocityDecay(0.5)
      .force('x', d3.forceX().strength(0.05))
      .force('y', d3.forceY().strength(0.05))
      .force(
        'collide',
        d3.forceCollide((d: any) => {
          return radiusScale(d.occurence) + 15;
        })
      )
      .on('tick', () => {
        this.setState({ ...this.props.data });
      });

  svgMouseLeave = () =>
    d3
      .forceSimulation()
      .nodes(this.props.data)
      .velocityDecay(0.5)
      .force('x', d3.forceX((d: any) => -2 * d.x).strength(0.05))
      .force('y', d3.forceY((d: any) => -2 * d.y).strength(0.05))
      .force(
        'collide',
        d3.forceCollide((d: any) => {
          return radiusScale(d.occurence / 10) + 11;
        })
      )
      .on('tick', () => {
        this.setState({ ...this.props.data });
      });

  render() {
    return (
      <svg
        width={width}
        height={height}
        style={{
          verticalAlign: 'middle',
          overflow: 'visible',
          marginTop: '1rem',
        }}
        onMouseOver={() => this.svgMouseOver()}
        onMouseLeave={() => this.svgMouseLeave()}
      >
        <text
          style={{
            fontSize: '0.7rem',
            transform: `translate(${10}rem, ${-1}rem)`,
            fill: 'grey',
          }}
        >
          {this.state.hovered != null ? `${this.state.hovered.tech}` : ``}
        </text>

        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {this.state.data.map((item: any, index: number) => (
            <g
              key={`bubble-${index}`}
              onMouseOver={() => this.handleMouseOver(item)}
              onMouseLeave={() => this.handleMouseLeave()}
            >
              <circle
                r={radiusScale(item.occurence + 10)}
                cx={item.x}
                cy={item.y}
                fill={'white'}
                stroke={color(item.occurence)}
                strokeWidth={5}
              />

              <image
                x={item.x - radiusScale(item.occurence)}
                y={item.y - radiusScale(item.occurence)}
                href={item.link}
                height={item.occurence}
                width={item.occurence}
              />
            </g>
          ))}
        </g>
      </svg>
    );
  }
}

export default BubbleMap;
