class PeaFlower extends HTMLElement {
    constructor(imgSrc, heading, headingLevel = 'h2', genotype, isTall){
        super()

        const shadow = this.attachShadow({mode: 'open'})

        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'plant-wrapper')

        let header = document.createElement('div')
        header.setAttribute('class', 'header')

        let head = document.createElement(headingLevel)
        head.innerText = heading
        let small = document.createElement('div')
        small.setAttribute('class', 'genotype')
        
        header.appendChild(head)
        header.appendChild(small).innerHTML = genotype
        wrapper.appendChild(header)

        let imgUrl = imgSrc;

        const img = document.createElement('img')
        img.src = imgUrl
        wrapper.appendChild(img)

        const style = document.createElement('style');

        style.textContent = `
            .plant-wrapper {
                border: 1px solid brown;
                background: var(--card-background);
                padding: var(--card-padding);
                border-radius: var(--card-radius);
                border-color: var(--card-border-color);
                min-width: 100px;
                max-width: 200px; 
            }
            img {
                ${(genotype === 'homozygote' && isTall) ?  'filter: none;' : 'filter: sepia(100%);'}
                // -webkit-filter: sepia(100%);
                width: 100%;
                // max-width: 160px;
            }
            .header{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: var(--card-padding);
                margin-top: calc(var(--card-padding) *.5);
            }
            .header h1, h2, h3, h4, h5, h6 {
                margin: 0;
            }
            .genotype {
                font-size: 70%;
                display: inline-block;
                padding: calc(var(--card-padding) * .5);
                border-radius: var(--card-radius);
                border: 1px var(--card-border-color) solid;
                background: var(--card-background);
                color: var(--card-tag-color);
            }
        `

        shadow.appendChild(style)
        shadow.appendChild(wrapper);
    }
}

customElements.define('pea-flower', PeaFlower)

export { PeaFlower }