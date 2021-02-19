<template>
    <button class="btn" :class="`btn-${buttonClass}`">{{ buttonText }}</button>
</template>
<script>
export default {
    props:{
        buttonClass: {
            type: String,
            required: false,
            default: 'primary'
        },
        buttonText:{
            type: String,
            required: true,
        }
    }
}
</script>
<style lang="scss">
$primary: #F7BF00;
$deleteColor: #C80600;
$favColor: #ffae00;

.btn{
    display: inline-block;
    padding: .6rem 3rem;
    background: transparent;
    margin: 1rem;
    cursor: pointer;
    font-size: 1rem;
    font-family: 'Varela Round', sans-serif;
    text-transform: uppercase;
    border: 2px $primary solid;
    border-radius: 3px;
    outline: none;

    color: #fff;
    background-image: -webkit-linear-gradient(10deg, $primary 50%,transparent 50%);
    background-image: linear-gradient(10deg, $primary 50%,transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: all 400ms ease-in-out;
    transition: all 400ms ease-in-out;

    &-primary{       
        &:hover{
            background-position: 0;
            color:black;
        }
    }

    &-confirm{
        border-color: #2B8600;
        background-image: linear-gradient(10deg, #2B8600 50%,transparent 50%);
        transition: all 400ms ease-in-out;
        &:hover{
            background-position: 0;
            color: white;
        }
        &-dark{
            border-color: #2B8600;
            color: #2B8600;
            background-image: linear-gradient(10deg, #2B8600 50%,transparent 50%);
            transition: all 400ms ease-in-out;
            &:hover{
                background-position: 0;
                color: black;
            }
        }
    }

    &-delete{
        background-image: linear-gradient(10deg, $deleteColor 50%,transparent 50%);
        transition: all 400ms ease-in-out;
        border-color: $deleteColor;
        &:hover{
            background-position: 0;
        }
        &-dark{
            border-color: $deleteColor;
            color: $deleteColor;
            background-image: linear-gradient(10deg, $deleteColor 50%,transparent 50%);
            transition: all 400ms ease-in-out;
            &:hover{
                background-position: 0;
                color: #FFF;
            }
        }
    }

    &-modify{
        background: $favColor;
        color: black;
        &:hover{
            background: #F79600;
            border-color: $primary;
        }
    }
}
</style>