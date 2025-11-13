import React from "react";
import styled from "styled-components";

const About = () => {
  const cards = [
    "https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/2164732058/photo/mature-business-and-man-with-tablet-outdoor-for-communication-research-and-typing-email-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=TvDlQXszOaxSi6n1U_hHGbVMGqAS_oXVx4JoeCBawm4=",
  ];

  const quantity = cards.length;

  const StyledWrapper = styled.div`
    .wrapper {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .inner {
      --w: 100px;
      --h: 150px;
      --translateZ: calc((var(--w) + var(--h)));
      --rotateX: -15deg;
      --perspective: 1000px;
      --quantity: ${(props) => props.quantity};
      position: absolute;
      width: var(--w);
      height: var(--h);
      top: 25%;
      left: calc(50% - (var(--w) / 2) - 2.5px);
      z-index: 2;
      transform-style: preserve-3d;
      transform: perspective(var(--perspective));
      animation: rotating 20s linear infinite;
    }

    @keyframes rotating {
      from {
        transform: perspective(var(--perspective)) rotateX(var(--rotateX))
          rotateY(0);
      }
      to {
        transform: perspective(var(--perspective)) rotateX(var(--rotateX))
          rotateY(360deg);
      }
    }

    .card {
      position: absolute;
      border: 2px solid #fff;
      border-radius: 12px;
      overflow: hidden;
      inset: 0;
      transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
        translateZ(var(--translateZ));
      background-color: #fff;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  return (
    <div className="w-full bg-linear-to-t from-green-100 to-green-50" style={{ marginTop: '0px' }}>
      <h2 className="text-5xl font-bold text-center my-8">
        Meet Our Super Reviewers
      </h2>

      <StyledWrapper quantity={quantity}>
        <div className="wrapper">
          <div className="inner">
            {cards.map((imgUrl, index) => (
              <div
                key={index}
                className="card"
                style={{
                  "--index": index,
                }}
              >
                <img src={imgUrl} alt={`card-${index}`} className="img" />
              </div>
            ))}
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

export default About;
