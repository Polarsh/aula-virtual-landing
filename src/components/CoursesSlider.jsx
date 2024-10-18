import Slider from 'react-slick'
import { useApp } from '../context/AppContext'
import ImageComponent from './Image'

export default function CoursesSliderComponent() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
  }

  const { coursesList } = useApp()

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {coursesList.map(course => (
          <div key={course.name} className='pb-8 px-5'>
            <div className='text-base font-semibold leading-7 text-gray-900'>
              <div className='bg-white p-2 rounded-lg text-center flex flex-col items-center'>
                <ImageComponent src={'course.webp'} alt={course.imageAlt} />
                <span>{course.name}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
