import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Configurator, GenericConfigurator } from '@spartacus/core';
import { ICON_TYPE } from '../../../misc/icon/icon.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ConfigUtilsService } from '../service/config-utils.service';

@Component({
  selector: 'cx-config-attribute-footer',
  templateUrl: './config-attribute-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigAttributeFooterComponent {
  constructor(private configUtils: ConfigUtilsService) {}

  iconTypes = ICON_TYPE;

  @Input() attribute: Configurator.Attribute;
  @Input() owner: GenericConfigurator.Owner;
  @Input() groupId: string;

  showRequiredMessage(): Observable<boolean> {
    return this.configUtils
      .isCartEntryOrGroupVisited(this.owner, this.groupId)
      .pipe(
        map((result) => {
          if (
            result &&
            this.attribute.required &&
            this.attribute.incomplete &&
            this.isUserInputEmpty(this.attribute.userInput)
          ) {
            return true;
          }
          return false;
        })
      );
  }

  isUserInputEmpty(input: string) {
    return input !== undefined && (!input.trim() || 0 === input.length);
  }

  getRequiredMessageKey(): string {
    return 'configurator.attribute.defaultRequiredMessage';
  }
}