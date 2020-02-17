export default class Space {
  constructor(name, id, image, pages) {
    this.name = name
    this.id = id
    this.image = image
    this.pages = pages
  }

  addPage(page) {
    this.pages.push(page)
  }

  removePage(page) {
    this.pages.splice( this.pages.indexOf(page), 1 )
  }
}
