import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import ChartStats from './ChartStats';
import chart from '../components/images/chart.svg';


function ChartSection() {
  return (
    <ChartStyled>
        <InnerLayout>
            <div className='chart-icon'>
                <div className='chart-left'>
                    <div className='stats'>
                       <div className='stats-money'>
                            <ChartStats name={'Balance'} amount={'$250'} />
                            <ChartStats name={'Last Transaction'} amount={'$1000'} />
                       </div>
                       <img src={chart} alt="" />
                    </div>
                </div>
                <div className='chart-right'>
                    <h2 className='secondary-heading'>
                        Manage your finances like a pro in no time
                    </h2>
                    <p>
                        lorem25
                    </p>
                    <AnimatedButton name={'Learn More'} />
                </div>
            </div>
        </InnerLayout>
    </ChartStyled>
  )
}


const ChartStyled = styled.section`
    .chart-icon{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .chart-left{
            width: 80%;
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }

        .chart-right{
            p{
                padding: 1.3rem 0;
            }
        }
    }
`;

export default ChartSection