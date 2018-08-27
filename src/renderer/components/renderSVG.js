import * as pt from '../libraries/potrace'

export const renderSVG = (file, settings, callback) => {
  pt.Potrace.loadImageFromFile(file)
  pt.Potrace.setParameter(settings)
  pt.Potrace.process(() => callback(pt.Potrace.getSVG(1)))
}
