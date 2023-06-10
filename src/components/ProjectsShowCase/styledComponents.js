import styled from 'styled-components'

export const ProjectsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProjectsContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`
export const SelectionCont = styled.div`
  align-self: flex-start;
  margin-left: 8%;
  width: 40%;
  margin-top: 2%;
`
export const SelectMenuDropdown = styled.select`
  border: 1px #cbd5e1 solid;
  color: #475569;
  width: 75%;
  height: 35px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`
export const OptionElement = styled.option`
  color: #475569;
  font-weight: 400;
`
export const ProjectsShowcaseCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const ProjectsListCont = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
`
export const ProjectItem = styled.li`
  width: 20%;
  height: 25%;
  border: none;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 10px;

  box-shadow: 2px 2px 2px 2px #e2e8f0;
`
export const ProjectImage = styled.img`
  width: 100%;
  border: none;
  margin: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const ProjectName = styled.p`
  font-size: 16px;
  color: #475569;
  font-weight: 500;
  margin-left: 8%;
  text-align: left;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const FailureCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const FailureImage = styled.img`
  width: 30%;
`
export const FailureText = styled.h1`
  color: #475569;
  font-size: 26px;
  font-weight: 500;
`
export const FailureSubText = styled.p`
  color: #cbd5e1;
  font-size: 16px;
  font-weight: 400;
`
export const RetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  height: 30px;
  width: 90px;
`
