import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductmanagerService } from '../productmanager.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  updateSelection: any
  deleteSelection: any
  items: any

  addProduct = this.form.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    type: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]]
  })

  updateProduct = this.form.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    type: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]]
  })

  constructor(private api: ProductmanagerService, private form: FormBuilder
  ) {
    this.populateList();
  }

  ngOnInit(): void {
  }
  addItem() {
    var name = this.addProduct.value.name
    var type = this.addProduct.value.type
    var description = this.addProduct.value.description
    var data = {
      "name": name,
      "description": description,
      "type": type,
    }
    this.api.add(data).subscribe(
      resp => {
        console.log(`Added product ${data}`);
        this.populateList()
      },
      error => {
        console.log(error);
      }
    )
  }

  populateList() {
    this.api.list().subscribe((data: any) => {
      console.log(data);
      this.items = data;
    }, error => {
    })
  }
  loadUpdate() {
    var result = this.items.find(obj => {
      return obj.productId === this.updateSelection
    })
    console.log(result)
    this.updateProduct.get('name')!.setValue(result.name);
    this.updateProduct.get('type')!.setValue(result.type);
    this.updateProduct.get('description')!.setValue(result.description);
  }
  updateItem() {
    var name = this.updateProduct.value.name
    var type = this.updateProduct.value.type
    var description = this.updateProduct.value.description
    var data = {
      "name": name,
      "description": description,
      "type": type,
    }
    this.api.update(data, this.updateSelection).subscribe(
      resp => {
        console.log(`Update product ${data}`);
        this.populateList()
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteItem() {
    console.log('here!!');

    this.api.delete(this.deleteSelection).subscribe(
      resp => {
        console.log('here');
        this.populateList()
      },
      error => {
        console.log(error);
      }
    )
  }
}
