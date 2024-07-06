import { COLOR } from "@/app/utilities/constants/colors";
import { useEffect, useState } from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    gap: 16px;

    @media (max-width: 768px) {
      padding: 0 16px;
      margin-top: 20px;
    }
  `,
  ItemList: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  `,
  Item: styled.button<{ color: string; value: number; $activated: boolean }>`
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: ${COLOR.BLACK};
    padding: 4px;
    gap: 8px;
    border: 1px solid
      ${({ $activated }) => ($activated ? COLOR.BROWN : COLOR.GRAY_BORDER)};
    border-radius: 6px;
    display: flex;

    &::before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: ${({ color }) => color};
    }

    &::after {
      content: "(${({ value }) => value})";
      color: ${COLOR.BLACK}60;
    }

    @media (max-width: 768px) {
      font-size: 8px;

      &::before {
        width: 10px;
        height: 10px;
      }
    }
  `,
  ChartWrapper: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  PieChart: styled.div<{ $doughnut: string }>`
    display: block;
    width: 350px;
    height: 350px;
    position: relative;
    border-radius: 50%;
    background-image: conic-gradient(${({ $doughnut }) => $doughnut});

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  `,
  ImageChartWrapper: styled.div`
    border: 20px solid white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    position: absolute;
    background: white;

    @media (max-width: 768px) {
      border-width: 15px;
    }
  `,
  ImageChart: styled.div`
    transform: rotate(-90deg);
    display: block;
    width: 200px;
    height: 200px;

    @media (max-width: 768px) {
      width: 115px;
      height: 115px;
    }
  `,
  ImageSlice: styled.svg`
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;

    @media (max-width: 768px) {
      width: 115px;
      height: 115px;
    }
  `,
};

interface PieChartProps {
  itemList: ChartItem[];
}

const PieChart = ({ itemList }: PieChartProps) => {
  const [items, setItems] = useState<ChartItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    setItems(
      itemList.map(
        (item, index): ChartItem => ({
          ...item,
          color: `hsl(${index * 137.508}, 60%, 75%)`,
        })
      )
    );
  }, [itemList.length, itemList]);

  const totalValue = items.reduce((acc, item) => acc + item.value, 0);

  const calcPathLength = (index: number) => {
    const prevValue = items
      .slice(0, index)
      .reduce((acc, item) => acc + item.value, 0);
    return `0 ${prevValue} ${items[index].value} ${
      totalValue - prevValue - items[index].value
    }`;
  };

  const calcDoughnutDegree = () => {
    let prevDeg = 0;
    let result = "";

    if (activeIndex >= 0) {
      const prevValue = items
        .slice(0, activeIndex)
        .reduce((acc, item) => acc + item.value, 0);

      prevDeg = (prevValue / totalValue) * 360;
      const currentDeg = (items[activeIndex].value / totalValue) * 360;

      result = `white 0deg ${prevDeg}deg, ${
        items[activeIndex].color
      } ${prevDeg}deg ${prevDeg + currentDeg}deg, white ${
        prevDeg + currentDeg
      }deg 360deg`;
    } else {
      items.forEach((item, index) => {
        const currentDeg = (item.value / totalValue) * 360;

        if (index > 0) result += ", ";

        result += `${item.color} ${prevDeg}deg ${prevDeg + currentDeg}deg`;

        prevDeg += currentDeg;
      });
    }

    return result;
  };

  return (
    <S.Wrapper>
      <S.ItemList>
        {items.map((item, index) => (
          <S.Item
            key={index}
            color={item.color || COLOR.BLACK}
            value={item.value}
            $activated={index == activeIndex}
            onClick={() => {
              setActiveIndex(index === activeIndex ? -1 : index);
            }}
          >
            {item.name}
          </S.Item>
        ))}
      </S.ItemList>
      <S.ChartWrapper>
        <S.PieChart $doughnut={calcDoughnutDegree()}>
          <S.ImageChartWrapper>
            <S.ImageChart>
              {items.map(
                (item, index) =>
                  (activeIndex < 0 || activeIndex == index) && (
                    <S.ImageSlice key={index}>
                      <mask id={`svgmask${index}`}>
                        <circle
                          cx="50%"
                          cy="50%"
                          r="25%"
                          stroke="#ffffff"
                          strokeWidth="50%"
                          pathLength={`${totalValue}`}
                          strokeDasharray={`${
                            activeIndex < 0 ? calcPathLength(index) : totalValue
                          }`}
                        />
                      </mask>
                      <image
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref={item.image}
                        mask={`url(#svgmask${index})`}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMinYMin slice"
                      />
                    </S.ImageSlice>
                  )
              )}
            </S.ImageChart>
          </S.ImageChartWrapper>
        </S.PieChart>
      </S.ChartWrapper>
    </S.Wrapper>
  );
};

export default PieChart;
