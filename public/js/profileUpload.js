    // Auto fill img when change
    const img = document.querySelector('#profileImg');
    const file = document.querySelector('#image');
    const imgChangeBtn = document.querySelector('#imgChangeBtn');
    if (file) {
        file.addEventListener('change', function() {
            const choosedFile = this.files['0'];
            // console.log(choosedFile);
            if (choosedFile) {
                const reader = new FileReader();

                reader.addEventListener('load', function() {
                    img.setAttribute('src', reader.result);
                });
                reader.readAsDataURL(choosedFile);
            }
        })
    }

    // const files = document.querySelector('#images');