import Slider from 'react-slick'
import { useApp } from '../context/AppContext'

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
        {coursesList.map(feature => (
          <div key={feature.name} className='pb-8 px-10'>
            <div className='text-base font-semibold leading-7 text-gray-900'>
              <div className='bg-gray-100 p-2 rounded-lg text-center flex flex-col items-center'>
                <feature.icon
                  className='h-48 w-48 text-my-primary mb-2'
                  aria-hidden='true'
                />
                <span>{feature.name}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
