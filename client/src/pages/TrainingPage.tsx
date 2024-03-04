import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './../index.css';
import Footer from "./../components/Footer";


const TrainingPage = () => {
  
  return (
    <div className="training-page-container">
      <PowerBIEmbed
                embedConfig={{
                    type: 'report', // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    id: '5bb25cc5-abfe-40ec-a0a8-29d6ac43fc20',
                    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMTg2MzkzYzQtMjM0NC00MzE5LWIxMmMtZjQ3MDhlMmJmNGRhIiwidCI6ImI0ZTdkMDJmLWQ5YzMtNGIyZC1iNDQ1LTUxNmIyZDM2YzIxMyJ9',
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzLyIsImlhdCI6MTcwOTU2Njg2MywibmJmIjoxNzA5NTY2ODYzLCJleHAiOjE3MDk1NzIzMzcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFpaVE2R0pJM0RNQ3M3TjlzRXJJaWF1YlBqNm81SXR2RENBZEM2bThPU0VNVzZoeWlqd0tLYzQ2SUJjQ2NFdVdRSWZDRUk3ZXp5MDJoZzQ1MUVXS1psRE1YWnFkVFdab0Y3VkxxRm9GMjY4dz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNYWpvbGxpIiwiZ2l2ZW5fbmFtZSI6IkRpYW5hIiwiaXBhZGRyIjoiNzYuNjUuODIuMTUiLCJuYW1lIjoiRGlhbmEgTWFqb2xsaSIsIm9pZCI6IjNlNDlmZWFjLWY5ZGYtNDg1MS05NmY3LWE5N2QzYTY1ZGExZSIsInB1aWQiOiIxMDAzMjAwMkY2NUVCRDVFIiwicmgiOiIwLkFiY0FMOURudE1QWkxVdTBSVkZyTFRiQ0V3a0FBQUFBQUFBQXdBQUFBQUFBQUFESkFNdy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJIOHpkdXJWTlRXVzZ1b3NjaHpZYllRa1RkTlBRM2hlQWV1YmplQ2NPVDJjIiwidGlkIjoiYjRlN2QwMmYtZDljMy00YjJkLWI0NDUtNTE2YjJkMzZjMjEzIiwidW5pcXVlX25hbWUiOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJkaWFuYW1ham9sbGlAbWFqb2xsaS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiIyemJFV19JTHdFT0MwaHpWQy1wUEFRIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoiZW4ifQ.Ad6di1MtWeA_NmMhW5p7fsP75XTZrtmJZ0e9pBGcdQM-iOaeakfZq7D1aNOaMu8Y9cV_jRiJITOdg5He5dmLuSCsTEKXbSR9YrHem-yEctWc1OGQmixEZZWpmKvsamrDdkIpEFmUEeprw6g4W7howVE3A5HKKcm0wK2OKw2DSM_qB14UpRrgwVhaSWrNbg0tS27oUsQXFmztEkXTnOq1aGahlbqoKitI7uSkdlKsW98k43VayQ681Pbxe17xGndV0Zynz7Ka_NYJqBXn9A-OVh6oJSqSX2qw1-OLP-4yVc4mcU4Na8BUcXpf1EVCUlGAG58XTOj8HiudtsuwMqnzPA',
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
export default TrainingPage;