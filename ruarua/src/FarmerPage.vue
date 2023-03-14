<template>
  <div>
    <!-- Top bar -->
    <div class="top-bar">
      <div class="logo">
        <img src="./assets/marketLogo.png" alt="Logo">
      </div>
      <div class="search-bar">
        <input type="text" class="form-control" placeholder="Search">
        <button type="button" class="btn btn-primary">Search</button>
      </div>
      <div class="action-buttons">
        <button type="button" class="btn btn-primary" @click="showCreateItemModal">Create Item</button>
        <button type="button" class="btn btn-primary" @click="showFileUploadModal">File Upload</button>
        <button type="button" class="btn btn-primary" @click="logout">Log Out</button>
      </div>
    </div>
    <!-- Main content -->
    <div class="main-content">
      <div class="items-list">
        <!-- Items header -->
        <div class="items-header">
          <div class="checkboxes">
            <input type="checkbox" v-model="selectAll" @change="toggleAllItems">
          </div>
          <div class="trade-name">Trade Name</div>
          <div class="category">Category</div>
          <div class="selling-price">Selling Price</div>
          <div class="quantity">Quantity</div>
          <div class="actions">Actions</div>
        </div>
        <!-- Items list -->
        <div class="items-body">
          <div class="item" v-for="(item, index) in items" :key="item.id">
            <div class="checkboxes">
              <input type="checkbox" v-model="selectedItems" :value="index">
            </div>
            <div class="trade-name">{{ item.tradeName }}</div>
            <div class="category">{{ item.category }}</div>
            <div class="selling-price">{{ item.sellingPrice }}</div>
            <div class="quantity">{{ item.quantity }}</div>
            <div class="actions">
              <button type="button" class="btn btn-primary" @click="editItem(index)">Edit</button>
              <button type="button" class="btn btn-danger" @click="deleteItem(index)">Delete</button>
            </div>
          </div>
        </div>
        <!-- Items footer -->
        <div class="items-footer">
          <div class="page-number">Page {{ currentPage }} of {{ totalPages }}</div>
          <div class="actions">
            <button type="button" class="btn btn-primary" @click="showProductInfo">Product Information</button>
            <button type="button" class="btn btn-primary" @click="showTransactionInfo">Transaction Information</button>
            <button type="button" class="btn btn-danger" @click="deleteSelectedItems">Multiple Delete</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modals -->
    <div class="modal" v-if="showCreateItemModal">
      <!-- Create Item Modal -->
    </div>
    <div class="modal" v-if="showFileUploadModal">
      <!-- File Upload Modal -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, tradeName: 'Item 1', category: 'Category 1', sellingPrice: 10, quantity: 5 },
        { id: 2, tradeName: 'Item 2', category: 'Category 2', sellingPrice: 20, quantity: 10 },
        { id: 3, tradeName: 'Item 3', category: 'Category 1', sellingPrice: 15, quantity: 7 },
        { id: 4, tradeName: 'Item 4', category: 'Category 3', sellingPrice: 25, quantity: 3 },
        { id: 5, tradeName: 'Item 5', category: 'Category 2', sellingPrice: 30, quantity: 6 },
        { id: 6, tradeName: 'Item 6', category: 'Category 1', sellingPrice: 12, quantity: 8 },
        { id: 7, tradeName: 'Item 7', category: 'Category 3', sellingPrice: 18, quantity: 12 },
        { id: 8, tradeName: 'Item 8', category: 'Category 1', sellingPrice: 22, quantity: 9 },
        { id: 9, tradeName: 'Item 9', category: 'Category 2', sellingPrice: 28, quantity: 4 },
        { id: 10, tradeName: 'Item 10', category: 'Category 3', sellingPrice: 35, quantity: 2 },
        { id: 11, tradeName: 'Item 11', category: 'Category 2', sellingPrice: 16, quantity: 11 },
        { id: 12, tradeName: 'Item 12', category: 'Category 1', sellingPrice: 14, quantity: 7 },
        { id: 13, tradeName: 'Item 13', category: 'Category 3', sellingPrice: 30, quantity: 5 },
        { id: 14, tradeName: 'Item 14', category: 'Category 1', sellingPrice: 20, quantity: 9 },
        { id: 15, tradeName: 'Item 15', category: 'Category 2', sellingPrice: 25, quantity: 3 }
      ],
      // Component data properties
      selectAll: false,
      selectedItems: [],
      currentPage: 1,
      itemsPerPage: 10,
      showCreateItemModal: false,
      showFileUploadModal: false
    }
  },
  methods: {
    // Method to toggle all checkboxes
    toggleAllItems() {
      if (this.selectAll) {
        this.selectedItems = this.items.map((item, index) => index);
      } else {
        this.selectedItems = [];
      }
    },
    // Method to delete selected items
    deleteSelectedItems() {
      this.selectedItems.sort((a, b) => b - a);
      this.selectedItems.forEach(index => this.items.splice(index, 1));
      this.selectedItems = [];
    },
    // Method to delete a single item
    deleteItem(index) {
      this.items.splice(index, 1);
    },
    // Method to edit a single item
    editItem(index) {
      // Show edit item modal
    },
    // Method to show the product information
    showProductInfo() {
      // Show product information modal
    },
    // Method to show the transaction information
    showTransactionInfo() {
      // Show transaction information modal
    },
    // Method to show the create item modal
    showCreateItemModal() {
      this.showCreateItemModal = true;
    },
    // Method to hide the create item modal
    hideCreateItemModal() {
      this.showCreateItemModal = false;
    },
    // Method to show the file upload modal
    showFileUploadModal() {
      this.showFileUploadModal = true;
    },
    // Method to hide the file upload modal
    hideFileUploadModal() {
      this.showFileUploadModal = false;
    },
    // Method to logout the user
    logout() {
      // Perform logout action
    }
  },
  computed: {
    // Computed property to calculate the total number of pages
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    // Computed property to get the current page items
    currentItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    }
  }
}
</script>

<style>
/* Top bar styles */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #eee;
}
.top-bar .logo img {
  height: 50px;
  margin-right: 10px;
}
.top-bar .search-bar {
  flex: 1;
  margin-right: 10px;
}
.top-bar .search-bar input {
  width: 100%;
}
.top-bar .action-buttons button {
  margin-left: 10px;
}

/* Main content styles */
.main-content {
  padding: 10px;
}
.items-list {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}
.items-header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #eee;
  font-weight: bold;
}
.items-header div {
  flex: 1;
  text-align: center;
}
.items-body {
  display: flex;
  flex-direction: column;
}
.item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
}
.item:nth-child(2n) {
  background-color: #f7f7f7;
}
.item .checkboxes {
  flex: 0.5;
}
.item .trade-name {
  flex: 1;
}
.item .category {
  flex: 1;
}
.item .selling-price {
  flex: 1;
}
.item .quantity {
  flex: 1;
}
.item .actions {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.item .actions button {
  margin-left: 5px;
}
.items-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #eee;
  font-weight: bold;
}
.items-footer .page-number {
  flex: 1;
}
.items-footer .actions {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.items-footer .actions button {
  margin-left: 5px;
}

/* Modals */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.modal-header h3 {
  margin: 0;
}
.modal-body {
  margin-bottom: 10px;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
.modal-footer button {
  margin-left: 5px;
}
</style>
