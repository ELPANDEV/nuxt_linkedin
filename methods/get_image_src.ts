const get_image_src = (image: null|interface_image): string => {
  return image
    ? image.src
    : '/images/user_madhav_bahl_bg.jfif'
}

export default get_image_src