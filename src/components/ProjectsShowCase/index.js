import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import {
  ProjectsMainContainer,
  ProjectsContainer,
  SelectionCont,
  SelectMenuDropdown,
  OptionElement,
  ProjectsShowcaseCont,
  ProjectsListCont,
  ProjectItem,
  ProjectImage,
  ProjectName,
  LoaderContainer,
  FailureCont,
  FailureImage,
  FailureText,
  FailureSubText,
  RetryButton,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProjectsShowCase extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    activeOptionId: categoriesList[0].id,
    projectsList: [],
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    const {activeOptionId} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${activeOptionId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.projects.map(eachProject => ({
        id: eachProject.id,
        name: eachProject.name,
        imageUrl: eachProject.image_url,
      }))
      this.setState({
        projectsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
      console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateActiveOptionId = event => {
    this.setState({activeOptionId: event.target.value}, this.getProjects)
  }

  renderFailureView = () => (
    <>
      <FailureCont>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
          alt="failure view"
        />
        <FailureText>Oops! Something Went Wrong</FailureText>
        <FailureSubText>
          We cannot seem to find the page you are looking for
        </FailureSubText>
        <RetryButton type="button" onClick={this.getProjects}>
          Retry
        </RetryButton>
      </FailureCont>
    </>
  )

  renderLoadingView = () => (
    <>
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color="#328af2" height="50" width="50" />
      </LoaderContainer>
    </>
  )

  renderSuccessView = () => {
    const {projectsList} = this.state
    return (
      <ProjectsListCont>
        {projectsList.map(eachProject => (
          <ProjectItem key={eachProject.id}>
            <ProjectImage src={eachProject.imageUrl} alt={eachProject.name} />
            <ProjectName>{eachProject.name}</ProjectName>
          </ProjectItem>
        ))}
      </ProjectsListCont>
    )
  }

  renderRespectiveView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {activeOptionId} = this.state
    return (
      <>
        <ProjectsMainContainer>
          <Header />
          <ProjectsContainer>
            <SelectionCont>
              <SelectMenuDropdown
                value={activeOptionId}
                onChange={this.updateActiveOptionId}
              >
                {categoriesList.map(eachOption => (
                  <OptionElement value={eachOption.id} key={eachOption.id}>
                    {eachOption.displayText}
                  </OptionElement>
                ))}
              </SelectMenuDropdown>
            </SelectionCont>
            <ProjectsShowcaseCont>
              {this.renderRespectiveView()}
            </ProjectsShowcaseCont>
          </ProjectsContainer>
        </ProjectsMainContainer>
      </>
    )
  }
}

export default ProjectsShowCase
