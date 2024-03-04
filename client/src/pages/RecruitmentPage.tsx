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
                    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=167620a8-7a53-4c23-807b-1f44f3b297fd&autoAuth=true&ctid=b4e7d02f-d9c3-4b2d-b445-516b2d36c213',
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzLyIsImlhdCI6MTcwOTU5NDA1NywibmJmIjoxNzA5NTk0MDU3LCJleHAiOjE3MDk1OTg3NDUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUF4QjZCSWtkWm05UmZqd2dvMG9mRFdKMGc3VlNwRWpVRXBWN1lWQ3NNUGlrRjBFYjJ4S2RySmZ0QzJSTXdIcVc5RWNYeHBPcjFmd0ZMZVpTMWh6azVTamdpZEUzaCtXS2JHczhwaTlCVHpsbz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNYWpvbGxpIiwiZ2l2ZW5fbmFtZSI6IkRpYW5hIiwiaXBhZGRyIjoiNzYuNjUuODIuMTUiLCJuYW1lIjoiRGlhbmEgTWFqb2xsaSIsIm9pZCI6IjNlNDlmZWFjLWY5ZGYtNDg1MS05NmY3LWE5N2QzYTY1ZGExZSIsInB1aWQiOiIxMDAzMjAwMkY2NUVCRDVFIiwicmgiOiIwLkFiY0FMOURudE1QWkxVdTBSVkZyTFRiQ0V3a0FBQUFBQUFBQXdBQUFBQUFBQUFESkFNdy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJIOHpkdXJWTlRXVzZ1b3NjaHpZYllRa1RkTlBRM2hlQWV1YmplQ2NPVDJjIiwidGlkIjoiYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzIiwidW5pcXVlX25hbWUiOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJkUUoxbC1aUG9FMjlaNWVIMXd5RUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoiZW4ifQ.r_bPNgwGwyrHzT_mKQWYV1x0IhhLU8N5KTpHy3gdYzDguc4nqQZ6Yx4AIE-Q4wF38KVXnf__C6xEXwqrRy2OvSWaMC-iBRli5g-vWNeph6OyWik69369kW9RMqG0C_AW_a-PBllJVWe7FkOXR2DFKLGFjwIjTjFYJ-Bv_wFyOWJDgM2h351EWsHrDbIiEYfpMK4l0IERmIsTkRgwjN4UuhmW6qH1j_-elZadG_oTpJyNnRGKdt64SNpyijkg59zqDSrmICjwtENeEpr33EWaECYKxu3_ADQQlyTq3pO_TUy6E9_zPzgeShrzOreAOppPc8fANooM52LciqsKRlGQcw',
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