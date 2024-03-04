import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './../index.css';
import Footer from "./../components/Footer";

const CompensationPage: React.FC = () => {
  return (
    <div className="compensation-page-container">
      <PowerBIEmbed
                embedConfig={{
                    type: 'report', // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    id: 'e14eff4b-582b-4e36-8dc1-15731de69e1e',
                    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNzQ3ZTcxYjMtMmYyMy00MDMzLTkwNWItMTg0YmMwODE4YzcxIiwidCI6ImI0ZTdkMDJmLWQ5YzMtNGIyZC1iNDQ1LTUxNmIyZDM2YzIxMyJ9',
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzLyIsImlhdCI6MTcwOTU3MTc5NiwibmJmIjoxNzA5NTcxNzk2LCJleHAiOjE3MDk1NzcyMTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFLV0srbGJPRGJFeW15QVNINmFiQkllVnFyb2dHTEJic3dEQzJPVGpPMzVjSzJEUWs4RHNxOTZBVnorS3ZPVm1NbHBYVzRwdGRiUW1hSEpJY2l1UEF5dm5EazNpbktCR0FJcmZSWWhtZ0QvQT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNYWpvbGxpIiwiZ2l2ZW5fbmFtZSI6IkRpYW5hIiwiaXBhZGRyIjoiNzYuNjUuODIuMTUiLCJuYW1lIjoiRGlhbmEgTWFqb2xsaSIsIm9pZCI6IjNlNDlmZWFjLWY5ZGYtNDg1MS05NmY3LWE5N2QzYTY1ZGExZSIsInB1aWQiOiIxMDAzMjAwMkY2NUVCRDVFIiwicmgiOiIwLkFiY0FMOURudE1QWkxVdTBSVkZyTFRiQ0V3a0FBQUFBQUFBQXdBQUFBQUFBQUFESkFNdy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJIOHpkdXJWTlRXVzZ1b3NjaHpZYllRa1RkTlBRM2hlQWV1YmplQ2NPVDJjIiwidGlkIjoiYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzIiwidW5pcXVlX25hbWUiOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJVTXBIRl9hNHVVeWl2Yy13ckNWM0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoiZW4ifQ.NiE1qg71nxfcgdQOtOkN6U7EPFsHQGe8AJwz_0Gl1Ym0igK1tKi6DZRZliMl4SY-2pBkjIQHNq_6DKXKhMhq0UHEPlM3UrsrsaOwbdYkJwD9MOdCplk0uW4JXnDqjtXH1bci67Jm7Nc9VZfdpA1IL2WXHhRyNC1rg5HwOOa1CbCv8l7BPkeHrXZUz5ZkNro7XzdUqnbkYQvdneZ0-NnBSp4PCPjc1tWnCK5uRNMJr4U4lE_8gbdIOldcuWEP5941weRZWzTTVYxHM_pGHd58rAQ30zkJwNTeKPa3LyTYGrrq3B9dOTJ7baXA6fch1q938EQnY7EZoflLC-ub9POc1A',
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

export default CompensationPage;