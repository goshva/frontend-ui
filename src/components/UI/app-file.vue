<template>
  <form method="post" enctype="#">
    <label class="input-file">
      <input type="file" name="file" @change="handleFileChange">
      <span class="input-file-btn">Выберите файл</span>
      <span class="input-file-text">{{ fileName }}</span>
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fileName: 'Файл не выбран'
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      this.fileName = file ? file.name : 'Файл не выбран';
    }
  }
};
</script>

<style scoped>
.input-file {
  position: relative;
  display: flex;
  gap: 15px;
  align-items: center;
}
.input-file-btn {
  position: relative;
  display: flex;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 14px;
  vertical-align: middle;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 4px;
  background-color: transparent;
  line-height: 22px;
  height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #1890FF;
  margin: 0;
  transition: background-color 0.2s;
  color: #1890FF;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}
.input-file-text {
  padding: 0 10px;
  line-height: 40px;
  display: inline-block;
}
.input-file input[type=file] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}
</style>