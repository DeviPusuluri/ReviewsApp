// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewsIndex: 0,
  }

  // Function to handle right arrow click
  onClickRightArrow = () => {
    const {activeReviewsIndex} = this.state
    const {reviewsList} = this.props

    // Check if there is a next review available
    if (activeReviewsIndex < reviewsList.length - 1) {
      // Increment activeReviewsIndex by 1
      this.setState(prev => ({
        activeReviewsIndex: prev.activeReviewsIndex + 1,
      }))
    }
  }

  // Function to render image and paragraphs based on review details
  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </>
    )
  }

  // Function to handle left arrow click
  onClickLeftArrow = () => {
    const {activeReviewsIndex} = this.state

    // Check if there is a previous review available
    if (activeReviewsIndex > 0) {
      // Decrement activeReviewsIndex by 1
      this.setState(prev => ({
        activeReviewsIndex: prev.activeReviewsIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewsIndex} = this.state

    // Get details of the current review based on activeReviewsIndex
    const currentReviewDetails = reviewsList[activeReviewsIndex]

    return (
      <div className="appContainer">
        <h1 className="heading">Reviews</h1>
        <div className="carouselContainer">
          {/* Left arrow button */}
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {/* Render the image and paragraphs based on the current review details */}
          {this.renderActiveReview(currentReviewDetails)}

          {/* Right arrow button */}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
