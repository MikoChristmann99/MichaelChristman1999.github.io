class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <ul id="footer-bar">
                    <li class="nav"><a href="https://github.com/michaelchristman1999/web-330">GitHub Repository</a></li>
                    <li class="nav"><a href="https://github.com/buwebdev/web-330">Course GitHub Repository</a></li>
                    <li class="nav"><a href="https://www.youtube.com/@bellevueuniversity/featured">YouTube Channel</a></li>
                    <li class="nav"><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);
