import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  OrderApproval,
  OrderApprovalDecisionValue,
  OrderApprovalService,
} from '@spartacus/core';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { OrderApprovalDetailService } from '../order-approval-detail.service';

@Component({
  selector: 'cx-order-approval-detail-form',
  templateUrl: './order-approval-detail-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderApprovalDetailFormComponent {
  approvalDecisionValue = OrderApprovalDecisionValue;
  approvalDecision: OrderApprovalDecisionValue;
  approvalFormVisible = false;
  approvalForm: FormGroup = this.fb.group({
    comment: [''],
  });

  protected orderApprovalLoading$: Observable<
    boolean
  > = this.orderApprovalDetailService
    .getOrderApprovalCodeFromRoute()
    .pipe(
      switchMap((approvalCode: string) =>
        this.orderApprovalService.getOrderApprovalLoading(approvalCode)
      )
    );

  protected decisionResultLoading$ = this.orderApprovalService.getMakeDecisionResultLoading();

  loading$ = combineLatest([
    this.orderApprovalLoading$,
    this.decisionResultLoading$,
  ]).pipe(
    map(
      ([approvalLoading, decisionResultLoading]) =>
        approvalLoading || decisionResultLoading
    )
  );

  orderApproval$: Observable<
    OrderApproval
  > = this.orderApprovalDetailService
    .getOrderApproval()
    .pipe(tap((approval) => console.log('orderapproval emits', approval)));

  constructor(
    protected orderApprovalDetailService: OrderApprovalDetailService,
    protected orderApprovalService: OrderApprovalService,
    private fb: FormBuilder
  ) {
    this.orderApprovalService.resetMakeDecisionProcessState();
  }

  displayDecisionForm(decision: OrderApprovalDecisionValue) {
    this.approvalDecision = decision;
    if (decision === OrderApprovalDecisionValue.APPROVE) {
      this.approvalForm.controls.comment.clearValidators();
    } else {
      this.approvalForm.controls.comment.setValidators([Validators.required]);
    }
    this.approvalFormVisible = true;
  }

  cancelDecisionForm() {
    this.approvalFormVisible = false;
    this.approvalForm.reset();
  }

  submitDecision(orderApproval: OrderApproval) {
    if (this.approvalForm.valid) {
      this.orderApprovalService.makeDecision(orderApproval.code, {
        decision: this.approvalDecision,
        comment: this.approvalForm.controls.comment.value,
      });
    } else {
      this.approvalForm.markAllAsTouched();
    }
  }
}
