import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './../index.css';
import Footer from "./../components/Footer";

const RecruitmentPage: React.FC = () => {
  return (
    <div className="compensation-page-container">
      <PowerBIEmbed
                embedConfig={{
                    type: 'report', // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    id: '167620a8-7a53-4c23-807b-1f44f3b297fd',
                    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTAxN2UzMjAtYWNhMy00MzFmLTkyOWUtMTZmOGI2MTVlMTMxIiwidCI6ImI0ZTdkMDJmLWQ5YzMtNGIyZC1iNDQ1LTUxNmIyZDM2YzIxMyJ9',
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzLyIsImlhdCI6MTcwOTU4MTQyOSwibmJmIjoxNzA5NTgxNDI5LCJleHAiOjE3MDk1ODY4NTcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFsM2YrNTJxZ2dzTVdOOEVJb2ZSbFNuTG9JY0Rab29wckdFWnl4d3VVZnFSQk1DQWFxRW5hcHBXUkRBWWx0UXF0U1cvSDd3NHJvOXo1Sll2MTRqUUVJbXowUjQraWtvaFNBR3N3cTRCaDhjRT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNYWpvbGxpIiwiZ2l2ZW5fbmFtZSI6IkRpYW5hIiwiaXBhZGRyIjoiNzYuNjUuODIuMTUiLCJuYW1lIjoiRGlhbmEgTWFqb2xsaSIsIm9pZCI6IjNlNDlmZWFjLWY5ZGYtNDg1MS05NmY3LWE5N2QzYTY1ZGExZSIsInB1aWQiOiIxMDAzMjAwMkY2NUVCRDVFIiwicmgiOiIwLkFiY0FMOURudE1QWkxVdTBSVkZyTFRiQ0V3a0FBQUFBQUFBQXdBQUFBQUFBQUFESkFNdy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJIOHpkdXJWTlRXVzZ1b3NjaHpZYllRa1RkTlBRM2hlQWV1YmplQ2NPVDJjIiwidGlkIjoiYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzIiwidW5pcXVlX25hbWUiOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJVTXBIRl9hNHVVeWl2Yy13WVQxX0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoiZW4ifQ.Kjz5IPDRSIcscwznoecJTLcKlAW8midmE0Id9OF9KdYvXyD0eNeqLQRpGmsfxp3T3EulIpV-l2GPlTwAXKRX3fila_EfmdcBwt-Lwzmz6BUygSCfaz5a0xq3KYs_G9cuvdbIU7KYnIEC8g76yNuIBfXklVizDB2gWAXeMD4C5cO7eHUIqGRbRQ81eaRk5HS3CK1Cl7WdMNb9EK3DOtPf9oEb8wVYZbFFrKOWivhNq48am2oByreg5vRy0GJWUXs4lzp8rmdXk424daG3nLt4_faSF6QxwwSGCpMm1gwE4MQy29jymmJqCKNg0xaDiCbC-JHLvg0H04_7_G3wOVejxQ',
                    tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: false
                            }
                        },
                        background: models.BackgroundType.Transparent,
                    }
                }}

                eventHandlers={new Map([
                    ['loaded', function () { console.log('Report loaded'); } ],
                    ['rendered', function () { console.log('Report rendered'); } ],
                    ['error', function (event) { console.log(event.detail); } ],
                    ['visualClicked', () => console.log('visual clicked')],
                    ['pageChanged', (event) => console.log(event)],
                ])}

                cssClassName={"Embed-container"}

                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport;
                } } />
         
    <Footer />
    </div>
  );
};

export default RecruitmentPage;