// <script lang="ts">
// import { defineComponent } from 'vue';
// export default defineComponent({
//     name: 'DemoView',
//     data() {
//         return {
//             file: []
//         };
//     },
//     methods: {
//         onFileUpload() {
//             // const reader = new FileReader();
//             // reader.onloadend = async () => {
//             //     let startIndex = reader?.result?.toString().indexOf('base64,') || 0;
//             //     let workbookContents = reader?.result?.toString().substr(startIndex + 7) || '';
//             //     await window.Excel.run(async (context) => {
//             //         context.workbook.insertWorksheetsFromBase64(workbookContents, {
//             //             sheetNamesToInsert: [], // Insert all the worksheets from the source workbook.
//             //             positionType: window.Excel.WorksheetPositionType.after, // Insert after the `relativeTo` sheet.
//             //             relativeTo: 'Sheet1' // The sheet relative to which the other worksheets will be inserted. Used with `positionType`.
//             //         });
//             //         await context.sync();
//             //     });
//             //     // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
//             // };
//             // reader.readAsDataURL(this.file[0]);
//         }
//     }
// });
// </script>
// <template>
//     <div>
//         <v-file-input label="File input" v-model="file" @change="onFileUpload"> </v-file-input>
//     </div>
// </template>
