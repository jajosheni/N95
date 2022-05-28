<div class="template-footer">
    <i class="mdi mdi-copyright text-color"></i>
    <a href="https://github.com/jajosheni">jajosheni</a>
</div>

<style>
    .template-footer {
        position: fixed;
        float: left;
        font-size: 0.75em;
        background-color: var(--lighest-white-overlay);
        border-radius: 0 var(--radius) var(--radius) 0;
        padding: 5px;
        opacity: 25%;
    }

    .template-footer > i,
    .template-footer > a {
        vertical-align: middle;
    }

    .template-footer:hover {
        opacity: 75%;
    }

    @media only screen and (max-width: 700px) {
        .template-footer {
            bottom: 5px;
            opacity: 40%;
        }
    }
</style>
