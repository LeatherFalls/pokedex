export const getAverageRGB = (imgEl: any, ratio: number) => {
  const canvas = document.createElement("canvas");

  imgEl.crossOrigin = "Anonymous";

  let width = canvas.width = imgEl.width;
  let height = canvas.height = imgEl.height;

  const context = canvas.getContext("2d");
  context?.drawImage(imgEl, 0, 0);

  let data, length;
  let i = -4, count = 0;

  try {
    data = context.getImageData(0, 0, width, height);
    length = data.data.length;
  } catch (error) {
    console.log(error);
    return {
      R: 0,
      G: 0,
      B: 0,
    }
  }

  let R, G, B;
  R = G = B = 0;

  while((i += ratio * 4) < length) {
    ++count;

    R += data.data[i];
    G += data.data[i + 1];
    B += data.data[i + 2];
  }

  R = ~~(R / count);
  G = ~~(G / count);
  B = ~~(B / count);

  return {
    R,
    G,
    B,
  }
}