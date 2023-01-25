import { KeyTooltip } from "../RadarStyledComponents/StyledTooltip";
import {
  StyledRadarKey,
  TooltipTitle,
  TooltipContent,
  KeyBorder,
} from "./styles/";
import { radarKeysText } from "data/data";

interface KeyCircleProps {
  color1: string;
  color2: string;
  color3: string;
}

interface Props {
  setScalingClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSkilledClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setPreferredClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const KeyCircle = ({ color1, color2, color3 }: KeyCircleProps) => (
  <svg width={24} height={24}>
    <circle cx={12} cy={12} r={12} fill={color1} />
    <circle cx={12} cy={12} r={8} fill={color2} />
    <circle cx={12} cy={12} r={4} fill={color3} />
  </svg>
);

const RadarKey = ({
  setScalingClicked,
  setSkilledClicked,
  setPreferredClicked,
}: Props) => {
  return (
    <StyledRadarKey>
      <div>Key</div>
      <KeyBorder>
        <KeyTooltip
          title={
            <>
              <TooltipTitle>Scaling</TooltipTitle>
              <TooltipContent>{radarKeysText.scaling}</TooltipContent>
            </>
          }
          aria-label={"Scaling"}
          placement="right"
          arrow
        >
          <div
            onMouseEnter={() => setScalingClicked(true)}
            onMouseLeave={() => setScalingClicked(false)}
          >
            <KeyCircle
              color1={"#c4c4c41a"}
              color2={"#c4c4c41a"}
              color3={"#e6236d"}
            />
            <span className="key-text">Scaling</span>
          </div>
        </KeyTooltip>
        <KeyTooltip
          title={
            <>
              <TooltipTitle>Skilled</TooltipTitle>
              <TooltipContent>{radarKeysText.skilled}</TooltipContent>
            </>
          }
          aria-label={"Skilled"}
          placement="right"
          arrow
        >
          <div
            onMouseEnter={() => setSkilledClicked(true)}
            onMouseLeave={() => setSkilledClicked(false)}
          >
            <KeyCircle
              color1={"#c4c4c41a"}
              color2={"#e6236d"}
              color3={"#222222"}
            />
            <span className="key-text">Skilled</span>
          </div>
        </KeyTooltip>
        <KeyTooltip
          title={
            <>
              <TooltipTitle>Preferred</TooltipTitle>
              <TooltipContent>{radarKeysText.preferred}</TooltipContent>
            </>
          }
          aria-label={"Preferred"}
          placement="right"
          arrow
        >
          <div
            onMouseEnter={() => setPreferredClicked(true)}
            onMouseLeave={() => setPreferredClicked(false)}
          >
            <KeyCircle
              color1={"#e6236d"}
              color2={"#290738"}
              color3={"#391A46"}
            />
            <span className="key-text">Preferred</span>
          </div>
        </KeyTooltip>
      </KeyBorder>
    </StyledRadarKey>
  );
};

export default RadarKey;
