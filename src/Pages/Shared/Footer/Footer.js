import React from 'react';

const Footer = () => {
    return (
        <div>
            <div class="mt-5">

                <footer class="bg-light text-center text-white">

                    <div class="container p-4 pb-0">

                        <section class="mb-4">

                            <a
                                class="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#3b5998" }}
                                href="https://facebook.com"
                                target='_blank'
                                rel="noreferrer"
                                role="button"
                            ><i class="fab fa-facebook-f"></i
                            ></a>


                            <a
                                class="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#55acee" }}
                                href="https://twitter.com"
                                target='_blank'
                                rel="noreferrer"
                                role="button"
                            ><i class="fab fa-twitter"></i
                            ></a>


                            <a
                                class="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#dd4b39" }}
                                href="https://google.com"
                                target='_blank'
                                rel="noreferrer"
                                role="button"
                            ><i class="fab fa-google"></i
                            ></a>


                            <a
                                class="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#ac2bac" }}
                                href="https://instagram.com"
                                target='_blank'
                                rel="noreferrer"
                                role="button"
                            ><i class="fab fa-instagram"></i
                            ></a>


                            <a
                                class="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#0082ca" }}
                                href="https://linkedin.com"
                                target='_blank'
                                rel="noreferrer"
                                role="button"
                            ><i class="fab fa-linkedin-in"></i
                            ></a>

                            <a
                                class="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#333333" }}
                                href="https://github.com"
                                target='_blank'
                                rel="noreferrer"
                                role="button"
                            ><i class="fab fa-github"></i
                            ></a>
                        </section>

                    </div>

                    <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        &copy; 1999 - {new Date().getFullYear()} Copyright:
                        <a class="text-white" href="https://mdbootstrap.com/">Sayma Rahman</a>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Footer;