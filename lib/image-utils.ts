export interface ImageInfo {
  src: string;
  alt: string;
  caption: string;
}

export const getLocationImages = (location: string | undefined): ImageInfo[] => {
  const fallbackImage = "https://images.pexels.com/photos/7671863/pexels-photo-7671863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"; // Mountain forest valley vista spring
  const defaultPhotos: ImageInfo[] = [
    { src: fallbackImage, alt: `${location || 'Location'} - Scenic View`, caption: `Scenic views around ${location || 'the area'}` },
    { src: fallbackImage, alt: `${location || 'Location'} - Valley View`, caption: `Valley views near ${location || 'the area'}` },
    { src: fallbackImage, alt: `${location || 'Location'} - Highway View`, caption: `Highway views in ${location || 'the area'}` },
    { src: fallbackImage, alt: `${location || 'Location'} - Mountain View`, caption: `Mountain views near ${location || 'the area'}` },
    { src: fallbackImage, alt: `${location || 'Location'} - Landscape View`, caption: `Landscape views around ${location || 'the area'}` },
  ];

  if (!location) return defaultPhotos;

  if (location.includes("Banff")) {
    return [
      {
        src: "https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Lake Louise Banff
        alt: `${location} - Lake Louise`,
        caption: `Beautiful views of Lake Louise in ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/15436379/pexels-photo-15436379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Johnston Canyon
        alt: `${location} - Johnston Canyon`,
        caption: `Johnston Canyon in ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/10290066/pexels-photo-10290066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Lake Agnes Tea House
        alt: `${location} - Lake Agnes`,
        caption: `Lake Agnes Tea House in ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/19554875/pexels-photo-19554875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Bow Falls
        alt: `${location} - Bow Falls`,
        caption: `Bow Falls in ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/31747370/pexels-photo-31747370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Sunshine Meadows
        alt: `${location} - Sunshine Meadows`,
        caption: `Sunshine Meadows in ${location}`,
      },
    ];
  } else if (location.includes("Kelowna")) {
    return [
      {
        src: "https://images.pexels.com/photos/15881307/pexels-photo-15881307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Okanagan Lake Kelowna
        alt: `${location} - Okanagan Lake`,
        caption: `Okanagan Lake in ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/16821531/pexels-photo-16821531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Knox Mountain
        alt: `${location} - Knox Mountain`,
        caption: `Knox Mountain in ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/2339180/pexels-photo-2339180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Kelowna Vineyard
        alt: `${location} - Vineyard`,
        caption: `Vineyards in ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/16821531/pexels-photo-16821531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Gibraltar Rock/Paul Lake
        alt: `${location} - Paul Lake`,
        caption: `Paul Lake near ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/15881307/pexels-photo-15881307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Okanagan Lake Kelowna (repeat)
        alt: `${location} - Lake View`,
        caption: `Lake views in ${location}`,
      },
    ];
  } else if (location.includes("Revelstoke")) {
    return [
      {
        src: "https://images.pexels.com/photos/216076/pexels-photo-216076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Revelstoke Mountain
        alt: `${location} - Mountain View`,
        caption: `Mountain views in ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/5064661/pexels-photo-5064661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Inspiration Woods
        alt: `${location} - Inspiration Woods`,
        caption: `Inspiration Woods in ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/12699494/pexels-photo-12699494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Emerald Lake Loop (Yoho image)
        alt: `${location} - Emerald Lake`,
        caption: `Emerald Lake near ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/216076/pexels-photo-216076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Revelstoke Mountain (repeat)
        alt: `${location} - Scenic View`,
        caption: `Scenic views around ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/5064661/pexels-photo-5064661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Inspiration Woods (repeat)
        alt: `${location} - Forest Trail`,
        caption: `Forest trails near ${location}`,
      },
    ];
  } else if (location.includes("Vancouver")) {
    // Using the same Vancouver skyline image for all variations
    const vancouverImage = "https://images.pexels.com/photos/2100921/pexels-photo-2100921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    return [
      { src: vancouverImage, alt: `${location} - Skyline`, caption: `Skyline of ${location}` },
      { src: vancouverImage, alt: `${location} - Downtown`, caption: `Downtown ${location}` },
      { src: vancouverImage, alt: `${location} - Harbor`, caption: `Harbor view in ${location}` },
      { src: vancouverImage, alt: `${location} - City View`, caption: `City views of ${location}` },
      { src: vancouverImage, alt: `${location} - Urban Landscape`, caption: `Urban landscape of ${location}` },
    ];
  } else if (location.includes("Juniper Beach")) {
    const juniperImage = "https://images.pexels.com/photos/1415364/pexels-photo-1415364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"; // Juniper Beach
    return [
      {
        src: juniperImage,
        alt: `${location} - Beach View`,
        caption: `Beach views at ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/31766206/pexels-photo-31766206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Thompson River Viewpoint/Juniper Bluff
        alt: `${location} - River View`,
        caption: `Thompson River views near ${location}`,
      },
      {
        src: "https://images.pexels.com/photos/2416602/pexels-photo-2416602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Thompson River
        alt: `${location} - River Scenery`,
        caption: `Thompson River scenery near ${location}`,
      },
      {
        src: juniperImage,
        alt: `${location} - Scenic View`,
        caption: `Scenic views around ${location}`,
      },
      {
        src: juniperImage,
        alt: `${location} - Trail View`,
        caption: `Trail views at ${location}`,
      },
    ];
  } else if (location.includes("Golden")) {
    const goldenImage = "https://images.pexels.com/photos/216076/pexels-photo-216076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"; // Golden (Revelstoke image)
    return [
      { src: goldenImage, alt: `${location} - Trail View`, caption: `Trail views in ${location}` },
      { src: goldenImage, alt: `${location} - Rotary Trail`, caption: `Rotary Trail in ${location}` },
      { src: goldenImage, alt: `${location} - River View`, caption: `River views in ${location}` },
      { src: goldenImage, alt: `${location} - Mountain View`, caption: `Mountain views near ${location}` },
      { src: goldenImage, alt: `${location} - Forest View`, caption: `Forest views around ${location}` },
    ];
  } else {
    // Default images for other locations
    return defaultPhotos;
  }
}; 