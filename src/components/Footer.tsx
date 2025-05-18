import { BASE_URL } from "../config/constants";


function Footer() {
    return (
        <footer className="bg-body-tertiary text-muted mt-auto py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    © 2025 Copyright: 
                    <a className="text-reset fw-bold ms-1" href={BASE_URL}>
                        Taniti Island
                    </a>
                </div>
                <div>
                    <a href={BASE_URL + "#/about"} className="text-reset me-4">
                        About
                    </a>
                    <a href={BASE_URL + "#/faq"} className="text-reset me-4">
                        FAQ
                    </a>
                    <a href={BASE_URL + "#/about"} className="text-reset me-4">
                        Contact
                    </a>
                    <a href={BASE_URL} className="text-reset me-4">
                        Privacy
                    </a>
                    <a href={BASE_URL} className="text-reset">
                        Terms
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;