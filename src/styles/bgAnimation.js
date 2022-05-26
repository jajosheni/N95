import colors from '../../resources/colors';

export const scopedID = Math.random().toString(36).slice(2, 7);

export const bgStyle = `
.animation-area-${scopedID} {
  position: fixed;
  z-index: -1;
  background: radial-gradient(circle at top, ${colors.darkerBackground}, ${colors.midDark});
  width: 100%;
  height: 100vh
}

.box-area-${scopedID} {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden
}

.box-area-${scopedID} li {
  position: absolute;
  display: block;
  list-style: none;
  width: 25px;
  background: rgba(255, 255, 255, 0.05);
  animation: animate 10s linear infinite;
  bottom: -150px;
  border-radius: 10px
}

.box-area-${scopedID} li:nth-child(1) {
  left: 86%;
  width: 80px;
  height: 80px;
  animation-delay: 0s
}

.box-area-${scopedID} li:nth-child(2) {
  left: 6%;
  width: 30px;
  height: 30px;
  animation-delay: 1.0s;
  animation-duration: 5s
}

.box-area-${scopedID} li:nth-child(3) {
  left: 75%;
  width: 100px;
  height: 100px;
  animation-delay: 3.5s
}

.box-area-${scopedID} li:nth-child(4) {
  left: 45%;
  width: 150px;
  height: 150px;
  animation-delay: 8.0s
}

.box-area-${scopedID} li:nth-child(5) {
  left: 60%;
  width: 40px;
  height: 40px;
  animation-delay: 0s
}

.box-area-${scopedID} li:nth-child(6) {
  left: 9%;
  width: 150px;
  height: 150px;
  animation-delay: 2.5s
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1
  }
    100% {
      transform: translateY(-1000px) rotate(360deg);
    opacity: 0
  }
}
`;
