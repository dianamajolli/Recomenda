import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './../index.css';
import Footer from "./../components/Footer";
import NavBar from "../components/NavBar";

const TrainingPage = () => {

    return (
        <div className="training-page-container">
            <NavBar />
            <PowerBIEmbed
                embedConfig={{
                    type: 'report', // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    id: '5bb25cc5-abfe-40ec-a0a8-29d6ac43fc20',
                    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMTg2MzkzYzQtMjM0NC00MzE5LWIxMmMtZjQ3MDhlMmJmNGRhIiwidCI6ImI0ZTdkMDJmLWQ5YzMtNGIyZC1iNDQ1LTUxNmIyZDM2YzIxMyJ9',
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzLyIsImlhdCI6MTcwOTU5MDM5NiwibmJmIjoxNzA5NTkwMzk2LCJleHAiOjE3MDk1OTQ0MDksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFBczhYTjdWdnh6Q2VudU5BNzhjZWFEYWRRUE01bDhuZjNRTFhuN2tMcVNXTG5SV3E2L1hobG9KNUxENGdhcmtsWTE1Tnl3ZC9XQWJxZFVYRjE0dWhrV3VzTWYrY0t6a09tZUpRNkNXYVEyUT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNYWpvbGxpIiwiZ2l2ZW5fbmFtZSI6IkRpYW5hIiwiaXBhZGRyIjoiNzYuNjUuODIuMTUiLCJuYW1lIjoiRGlhbmEgTWFqb2xsaSIsIm9pZCI6IjNlNDlmZWFjLWY5ZGYtNDg1MS05NmY3LWE5N2QzYTY1ZGExZSIsInB1aWQiOiIxMDAzMjAwMkY2NUVCRDVFIiwicmgiOiIwLkFiY0FMOURudE1QWkxVdTBSVkZyTFRiQ0V3a0FBQUFBQUFBQXdBQUFBQUFBQUFESkFNdy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJIOHpkdXJWTlRXVzZ1b3NjaHpZYllRa1RkTlBRM2hlQWV1YmplQ2NPVDJjIiwidGlkIjoiYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzIiwidW5pcXVlX25hbWUiOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJib1NuLWlQb2lFRzExeVhfRXM0QUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoiZW4ifQ.CShXYdMQ5u4pfC4fDQrkMhzLmgRKQ_MR9_7R1hoCj3hjkXJ1e3-QqZrGVBlNIQSTmg3Fqep7_0mErCFAvzp--ncWxubRQ8r7NnztkPxFGpHh4d_RmSmmEXI9xfuknALDEih130d9BKvuZsfDJ_MGtRpnjfD4BSlQLmyNsPinIYsG04GwN2USjXfWXgzJOsuqsrtjKba0I4rG4gVPsVX3L7f9RQK9YP-Jzqk7iWo0CkcbrebaK_vIhsVc83OHFjYo_PBoYmayiEQDmChf5Rs41o1QjhtL90y9zrXCk06EQeT6LeBSbMcrV-BCHywlNkGWwKIGNp-u5AdTHUJgY3JdKQ',
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
                    ['loaded', function () { console.log('Report loaded'); }],
                    ['rendered', function () { console.log('Report rendered'); }],
                    ['error', function (event) { console.log(event.detail); }],
                    ['visualClicked', () => console.log('visual clicked')],
                    ['pageChanged', (event) => console.log(event)],
                ])}

                cssClassName={"Embed-container"}

                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport;
                }} />

            <Footer />
        </div>

    );
};
export default TrainingPage;