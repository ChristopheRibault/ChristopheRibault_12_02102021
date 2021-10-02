import style from 'styled-components';

const StyledBar = style.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #020203;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2rem;
  z-index: -1;
  padding: 1em
`;

const Logos = style.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;
`;

const Logo = style.li`
  transform: scale(.8);
  background-color: #fff;
  padding: .5em;
  border-radius: 6px;
`;

const Copyright = style.p`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  margin: 0 auto;
  width: 10px;
  font-size: .5em;
`;

export {
  StyledBar,
  Logos,
  Logo,
  Copyright,
};
