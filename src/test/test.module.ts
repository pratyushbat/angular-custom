import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, CommonModule],

  declarations: [MessageComponent],
  bootstrap: [MessageComponent],
})
export class TestModule {}
