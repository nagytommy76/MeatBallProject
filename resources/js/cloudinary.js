import Vue from 'vue';
import Cloudinary, { CldImage,CldVideo, CldTransformation  }  from 'cloudinary-vue';

Vue.use(Cloudinary, {
    configuration: { cloudName: 'domsczfqu' },
    components: [ CldImage,CldVideo,CldTransformation  ]
})
