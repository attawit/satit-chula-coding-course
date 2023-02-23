<template>
  <div class="row">
    <div class="col-12">
      <h3>V-For Examples</h3>
    </div>
    <div v-if="!isShowProfile" class="row">
      <div
        class="col-lg-2 col-md-3 col-sm-4 col-6 p-1"
        v-for="(item, index) in newdatas"
        :key="index"
      >
        <div>
          <img @click="clickImage(item.name)" :src="item.img" width="200" />
          <h1>{{ index }}</h1>
        </div>
      </div>
    </div>
    <div v-else>
      <button @click="isShowProfile = false">Close</button>
      <profile-comp :name="selected" age="50"></profile-comp>
    </div>
  </div>
</template>
<script>
import ProfileComp from "./ProfileComp.vue";
export default {
  components: {
    ProfileComp,
  },
  data() {
    return {
      datas: [
        {
          name: "เด็กชายมาธิศร์ ทยาธร ดูบาส",
          class: "ม.4/1 ",
          img:"https://firebasestorage.googleapis.com/v0/b/satit-chula.appspot.com/o/images%2F574-536x354.jpg?alt=media&token=aa536901-5aff-41c9-abd4-c8924550c46b"
        },
        {
          name: "เด็กชายธีภพ ตัจฉกวิทย์",
          class: "ม.4/1 ",
        },
        {
          name: "นายน้ำปิง พรประสิทธิ์",
          class: "ม.4/1 ",
        },
        {
          name: "เด็กชายศุภชาต ศรีหะรัญ",
          class: "ม.4/1 ",
        },
        {
          name: "นายพิธิวัต ชาวหา",
          class: "ม.4/1 ",
        },
        {
          name: "เด็กชายพชร พนาพิศาล",
          class: "ม.4/1 ",
        },
        {
          name: "นางสาวสรัลชยา โกสิยางกูร",
          class: "ม.4/1 ",
        },
        {
          name: "เด็กชายพศิน กันวี",
          class: "ม.4/1 ",
        },
        {
          name: "เด็กหญิงวราลี ศรีเที่ยง",
          class: "ม.4/1 ",
        },
      ],
      newdatas:[],
      selected: null,
      isShowProfile: false,
    };
  },
  created() {
    let t = 0;
    var tempArr = [];
    this.datas.forEach((x) => {
      t++;
      let k = x;
      k.img = "https://picsum.photos/20" + t.toString();
      tempArr.push(k);
    });
    this.newdatas = tempArr;
  },

  methods: {
    clickImage(name) {
      this.selected = name.toString();
      this.isShowProfile = true;
    },
  },
};
</script>